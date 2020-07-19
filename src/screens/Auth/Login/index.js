import React, { useEffect } from 'react'
import { Text, View, TextInput, Alert } from 'react-native';
import Button from 'react-native-button'
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import { login } from 'modules';
import { authStyles as styles } from '..';

const Login = (props) => {
  const { control, handleSubmit, errors } = useForm();
  const alert = (title, message) => {
    Alert.alert(
      title,
      message,
      [{ text: "Close", onPress: () => console.log("Cancel Pressed") },
      { text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  }
  const onSubmit = data => {
    const formData = new FormData();
    formData.append('username', data.username)
    formData.append('password', data.password)
    props.login(formData)
      .then(res => {
        if ('status' in res.value && parseInt(res.value.status) === 200) {
          
        } else {
          alert('Login Failed', 'Please try again...')
        }
      })
      .catch(error => {
        console.log(error)
        let errorMessage = 'Please try again';
        if (error.response !== undefined) {
          if (error.response.data) {
            if (error.response.data.message) {
              errorMessage = error.response.data.message;
            }
          }
        }
        alert('Login Failed', errorMessage)
      });
  };
  
  
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.h1}>Welcome Back,</Text>
          <Text style={styles.small}>Please sign in to continue</Text>
        </View>
        <View style={styles.content}>
          <View>
            <View style={styles.formControl}>
              <Text style={styles.label}>Username</Text>
              <Controller control={control} render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
                name="username" rules={{ required: true }} defaultValue=""
              />
              {errors.username && <Text>This is required.</Text>}
            </View>
            <View style={styles.formControl}>
              <Text style={styles.label}>Password</Text>
              <Controller control={control} render={({ onChange, onBlur, value }) => (
                <TextInput
                  secureTextEntry={true}
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
                name="password" rules={{ required: true }} defaultValue=""
              />
              {errors.password && <Text>This is required.</Text>}
            </View>

            
            <Button
              style={styles.button}
              containerStyle={styles.buttonContainer}
              // onPress={() => props.navigation.navigate('signup1')}
              onPress={handleSubmit(onSubmit)}
            >
              Login
            </Button>
            {/* <Button title="Login" onPress={handleSubmit(onSubmit)} /> */}
          </View>
        </View>
      </View>
    </>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);