import React, { useState, useEffect } from 'react'
import { Text, View, Image } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import {  ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { ScreenHeader } from 'components';
import { profileStyles as styles } from 'assets/styles'
import { connect } from 'react-redux';
import { getRole } from 'utils';
import { logout, patchUser, getDetailUser, setAuth } from 'modules';
import { createImageFormData } from 'utils';
import ImagePicker from 'react-native-image-picker'
import { appConfig } from 'configs';

const Profile = (props) => {
  const [image, setImage] = useState(null)
  const { control, handleSubmit, errors } = useForm();
  useEffect(() => {
    if (props.users.data.length === 1) setNewProfile()
  }, [props.users])
  useEffect(() => {
    // console.log(props.auth, 'props auth did update');
  }, [props.auth])
  const onSubmit = data => {
    console.log(data);
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
  const setNewProfile = () => {
    // console.log(props.auth.data, 'props auth');
    // console.log(props.users.data, 'props users')
    const userData = props.users.data[0]
    const newProfile = {
      ...props.auth,
      data: {
        ...props.auth.data,
        username: userData.username,
        full_name: userData.full_name,
        email: userData.email
      }
    }
    props.setAuth(newProfile)
    console.log(newProfile, 'new profile');
  }
  const getDetailUser = (userId) => {
    const token = props.auth.data.tokenLogin;
    const user_id = props.auth.data.user_id;
    props.getDetailUser(token, user_id)
      .then((res) => {
        if (res.value.status === 200) {
          
        }
      })
      .catch((error) => {
        console.log(error);
        error.response.data.message
          ? alert('Failed', error.response.data.message)
          : alert('Failed', 'Update User Failed. Pleas try again later')
      })
  }
  const updateUser = (data) => {
    const token = props.auth.data.tokenLogin;
    const user_id = props.auth.data.user_id;
    if (data.username === props.auth.data.username) delete data.username
    if (data.password === undefined || data.password.length < 1 || data.password === null) delete data.password
    const formData = createImageFormData(data, image, 'image')
    console.log(formData)
    props.patchUser(token, formData, user_id)
      .then((res) => {
        if (res.value.status === 200) {
          alert('Success', 'User updated successfully')
          getDetailUser(user_id)
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
    <>
      <ScrollView>
        <View style={styles.container}>
          <ScreenHeader navigation={props.navigation} title="Profile" />
          <View style={styles.header}>
            <TouchableOpacity style={styles.profileImage} onPress={() => handleChoosePhoto()}>
              {
                image
                  ? <Image source={{ uri: image.uri }} style={styles.image} resizeMethod="resize" />
                  : <Image style={styles.image} source={{ uri: appConfig.url.assets + '/' + props.auth.data.image }} resizeMethod="resize" />
              }
            </TouchableOpacity>
            <View style={styles.profileInfo}>
              <Text style={styles.name}>{props.auth.data.full_name}</Text>
              <Text style={styles.email}>{props.auth.data.email}</Text>
              <Text style={styles.role}>{getRole(props.auth.data.role)}</Text>
            </View>
          </View>
          <View style={styles.edit}>
            <Text
              style={styles.text}
              onPress={() => props.logout()}
            >Logout</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.formControl}>
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
                name="username" rules={{required: true}} defaultValue={props.auth.data.username}
              />
            </View>
            <View style={styles.formControl}>
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
                name="full_name" rules={{required: true}} defaultValue={props.auth.data.full_name}
              />
            </View>
            <View style={styles.formControl}>
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
                name="email" rules={{required: true}} defaultValue={props.auth.data.email}
              />
            </View>
            <View style={styles.formControl}>
              <Text style={styles.label}>Password</Text>
              <Controller control={control} render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
                  placeholder={errors.password && 'This is required'}
                  onBlur={onBlur}
                  secureTextEntry={true}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
                name="password"
              />
            </View>
            <View style={styles.forget}>
              <Text style={styles.forgetText}>Forgot Password?</Text>
            </View>
            <View style={styles.buttonWrapper}>
              <Text style={styles.button} onPress={handleSubmit(onSubmit)}>Save</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users
})

const mapDispatchToProps = {
  logout,
  patchUser,
  getDetailUser,
  setAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)