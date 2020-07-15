import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'

const Login = ({ navigation }) => {
  const logging = () => {
    console.log('Logging');
  }
  return (
    <>
      <View>
        <Text>This is login screen!</Text>
        <Button
          title='Go to sign up screen'
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </>
  )
}

export default Login;