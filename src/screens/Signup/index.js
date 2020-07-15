import React from 'react'
import { View, Text, Button } from 'react-native'

const Signup = ({ navigation }) => {
  return (
    <>
      <View>
        <Text>This is Sign Up screen!</Text>
        <Button
          title='Go to login screen'
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </>
  )
}

export default Signup;