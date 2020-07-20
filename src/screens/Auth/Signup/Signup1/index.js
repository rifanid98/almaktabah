import React, { useEffect, useState } from 'react'
import { Text, View, TextInput, Alert } from 'react-native';
import Button from 'react-native-button'
import { useForm, Controller } from 'react-hook-form';
import { authStyles as styles } from 'screens/Auth';
import { ScreenHeader } from 'components';

const Signup1 = (props) => {
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
    console.log(data)
    props.navigation.navigate('signup2', data)
  };
  
  return (
    <>
      <View style={styles.wrapper}>
        <ScreenHeader navigation={props.navigation} title="" />
        <View style={styles.headerSignup}>
          <Text style={styles.h1}>Hello Awesome!,</Text>
          <Text style={styles.small}>Please register your account</Text>
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
              <Text style={styles.label}>Full Name</Text>
              <Controller control={control} render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
                name="full_name" rules={{ required: true }} defaultValue=""
              />
              {errors.full_name && <Text>This is required.</Text>}
            </View>


            <Button
              style={styles.button}
              containerStyle={styles.buttonContainer}
              onPress={handleSubmit(onSubmit)}
            >
              Next
            </Button>
          </View>
        </View>
      </View>
    </>
  )
}

export default Signup1;