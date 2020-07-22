import React, { useState } from 'react';
import { Text, View, TextInput, ImageBackground, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-community/picker';
import { connect } from 'react-redux';
import { getUsers, addUser } from 'modules';
import { alert, createUrlParamFromObj, createImageFormData } from 'utils';
import ImagePicker from 'react-native-image-picker'

import { managerStyles as styles, colorScheme as color} from "assets/styles";

const UserAddModalBody = (props) => {
  const [role, setRole] = useState(3)
  const [defaultImage] = useState(require('assets/images/default.png'))
  const [image, setImage] = useState(null)

  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    data.role = role
    // data.image hanlde later OK?!
    addUser(data)
  }
  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        setImage(response)
      }
    })
  }
  const getUsers = () => {
    const pagination = {
      page: 1,
      limit: 10
    }
    const params = createUrlParamFromObj(pagination);
    const token = props.auth.data.tokenLogin;
    token
      ? props.getUsers(token, params)
        .then((res) => {

        }).catch((error) => {
          console.log(`get users failed`)
        })
      : alert('Token Failed', 'Cannot find token...')
  }
  const addUser = (data) => {
    const token = props.auth.data.tokenLogin;
    const formData = createImageFormData(data, image, 'image')
    props.addUser(token, formData)
      .then((res) => {
        if (res.value.status === 201) {
          Alert.alert('Success', 'User added successfully')
          getUsers()
        }
      })
      .catch((error) => {
        console.log(error);
        error.response.data.message
          ? alert('Failed', error.response.data.message)
          : alert('Failed', 'Add User Failed. Pleas try again later')
      })
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.formImage} onPress={() => handleChoosePhoto()}>
          {
            image
              ? <Image source={{ uri: image.uri }} style={styles.image} />
              : <ImageBackground source={defaultImage} style={styles.image}></ImageBackground>
          }
          <Text style={{ textAlign: 'center' }}>Touch to upload an image</Text>
        </TouchableOpacity>
        
        <Text style={styles.label}>Username</Text>
        <Controller control={control} render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            placeholder={errors.username && 'This is required'}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
          name="username" rules={{required: true}} defaultValue=""
        />

        <Text style={styles.label}>Full Name</Text>
        <Controller control={control} render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            placeholder={errors.full_name && 'This is required'}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
          name="full_name" rules={{required: true}} defaultValue=""
        />

        <Text style={styles.label}>Email</Text>
        <Controller control={control} render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            placeholder={errors.email && 'This is required'}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
          name="email" rules={{required: true}} defaultValue=""
        />

        <Text style={styles.label}>Role</Text>
        <Picker
          selectedValue={role}
          style={[styles.input, { marginBottom: 0 }]}
          onValueChange={(itemValue, itemIndex) => setRole(itemValue)}>
          <Picker.Item label="Admin" value={1} />
          <Picker.Item label="Staff" value={2} />
          <Picker.Item label="User" value={3} />
        </Picker>

        <Text style={styles.label}>Password</Text>
        <Controller control={control} render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            placeholder={errors.password && 'This is required'}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            secureTextEntry={true}
          />
        )}
          name="password" rules={{required: true}} defaultValue=""
        />

      </ScrollView>
      <View style={{ height: 60 }}>
        <Text style={styles.button} onPress={handleSubmit(onSubmit)}>Save</Text>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = {
  getUsers,
  addUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAddModalBody)