import React, { useState } from 'react';
import { Text, View, TextInput, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-community/picker';
import { connect } from 'react-redux';
import { getUsers, patchUser } from 'modules';
import { alert, createUrlParamFromObj, createImageFormData } from 'utils';
import ImagePicker from 'react-native-image-picker'
import { managerStyles as styles, colorScheme as color} from "assets/styles";

const UserEditModalBody = (props) => {
  const [role, setRole] = useState(props.data.role)
  const [image, setImage] = useState(null)

  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    data.role = role
    // data.image hanlde later OK?!
    updateUser(data)
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
      ? props.getUsers(token)
        .then((res) => {

        }).catch((error) => {
          console.log(`get users failed`)
        })
      : alert('Token Failed', 'Cannot find token...')
  }
  const updateUser = (data) => {
    const token = props.auth.data.tokenLogin;
    const user_id = props.data.user_id;
    if (data.username === props.data.username) delete data.username
    if (data.password === null || data.password.length < 1 || data.password === undefined) delete data.password
    const formData = createImageFormData(data, image, 'image')
    console.log(formData)
    props.patchUser(token, formData, user_id)
      .then((res) => {
        if (res.value.status === 200) {
          alert('Success', 'User updated successfully')
          getUsers()
        }
      })
      .catch((error) => {
        console.log(error);
        error.response.data.message
          ? alert('Failed', error.response.data.message)
          : alert('Failed', 'Update User Failed. Pleas try again later')
      })
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.formImage} onPress={() => handleChoosePhoto()}>
          {
            image
              ? <Image source={{ uri: image.uri }} style={styles.image} />
              : <ImageBackground source={{ uri: props.data.image }} style={styles.image}></ImageBackground>
          }
          <Text style={{ textAlign: 'center' }}>Touch to upload an image</Text>
        </TouchableOpacity>
        
        <Text style={styles.label}>Username</Text>
        <Controller control={control} render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
          name="username" rules={{}} defaultValue={props.data.username}
        />

        <Text style={styles.label}>Full Name</Text>
        <Controller control={control} render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
          name="full_name" rules={{}} defaultValue={props.data.full_name}
        />

        <Text style={styles.label}>Email</Text>
        <Controller control={control} render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
          name="email" rules={{}} defaultValue={props.data.email}
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
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            secureTextEntry={true}
          />
        )}
          name="password" rules={{}} defaultValue=""
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
  patchUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditModalBody)