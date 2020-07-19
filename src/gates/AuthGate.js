import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup2, Signup1 } from 'screens'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { button } from 'assets';
import { View, Text } from 'react-native';

const AuthGate = (props) => {
  const Stack = createStackNavigator();
  const {
    getStarted
  } = props;
  

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
        {/* <Stack.Screen
          name="signup"
          component={Signup}
          options={{
            headerShown: true,
            headerTitle: null,
            headerLeft: () => (
              <View style={button.headerBackButton}><FontAwesomeIcon icon={faArrowLeft} size="20" /></View>
            )
          }} /> */}
      </Stack.Navigator>
    </>
  )
}

export default AuthGate;