import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup2, Signup1 } from 'screens'

const AuthGate = (props) => {
  const Stack = createStackNavigator();
  
  return (
    <>
      <Stack.Navigator initialRouteName='login' screenOptions={{
        headerShown: false,
        headerTitle: null
      }}>
        <Stack.Screen
          name="login"
          component={Login} />
        <Stack.Screen name="signup1" component={Signup1} options={{title: 'Sign Up Screen'}} />
        <Stack.Screen name="signup2" component={Signup2} options={{title: 'Sign Up Screen'}} />
      </Stack.Navigator>
    </>
  )
}

export default AuthGate;