import React, { useEffect, useState } from 'react'
import { Text, View, TextInput, Alert } from 'react-native';
import Button from 'react-native-button'
import { useForm, Controller } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers';
import { connect } from 'react-redux';
import { register } from 'modules';
import { authStyles as styles } from 'screens/Auth';
import { signupSchema } from 'utils';


const Signup2 = (props) => {
  const [signupData] = useState(props.route.params)
  const { control, handleSubmit, errors } = useForm({
    // resolver: joiResolver(signupSchema),
  });
  const alert = (title, message, goto=null) => {
    Alert.alert(
      title,
      message,
      [{
        text: "Close", onPress: () => {
          goto ? props.navigation.navigate(goto)
          : console.log("Cancel Pressed") 
      }},
        {
          text: "OK", onPress: () => {
            goto ? props.navigation.navigate(goto)
              : console.log("Ok Pressed") 
      } }],
      { cancelable: false }
    );
  }
  const onSubmit = data => {
    const formData = new FormData();
    formData.append('username', signupData.username)
    formData.append('full_name', signupData.full_name)
    formData.append('email', data.email)
    formData.append('password', data.password)
    formData.append('role', 3)
    props.register(formData)
      .then(res => {
        if ('status' in res.value && parseInt(res.value.status) === 201) {
          alert('Sign Up Success', 'Please login to continue', 'login')
          props.navigation.navigate('login')
        } else {
          alert('Sign Up Failed', 'Please try again...')
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
        alert('Sign Up Failed', errorMessage)
      });
  };
  
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.h1}>One More Step!,</Text>
          <Text style={styles.small}>Please complete data below</Text>
        </View>
        <View style={styles.content}>
          <View>
            <View style={styles.formControl}>
              <Text style={styles.label}>Email</Text>
              <Controller control={control} render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
                name="email" rules={{ required: true }} defaultValue=""
              />
              {errors.email && <Text>This is required.</Text>}
            </View>
            <View style={styles.formControl}>
              <Text style={styles.label}>Password</Text>
              <Controller control={control} render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
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
              onPress={handleSubmit(onSubmit)}
            >
              Sign Up
            </Button>
          </View>
        </View>
      </View>
    </>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  register
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup2);