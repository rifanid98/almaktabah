/**
 * React Navigation
 */
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * React
 */
import React, { useState, useEffect } from 'react';

/**
 * Gates
 */
import OnBoardGate from './OnBoardGate';
import MainGate from './MainGate';
import AuthGate from './AuthGate';

/**
 * Redux
 */
import { connect } from 'react-redux';
import { firstRun } from 'modules';

const RootGate = (props) => {
  const Stack = createStackNavigator();
  // const [isFirstRun, setIsFirstRun] = useState(props.apps.firstRun)
  // const [auth, setAuth] = useState(props.auth ? props.auth.data : {})

  // useEffect(() => {
  //   setIsFirstRun(props.apps.firstRun)
  // }, [props.apps])

  // useEffect(() => {
  //   setAuth(props.auth.data)
  // }, [props.auth])
  return (
    <>
      <Stack.Navigator
        initialRouteName={props.apps.firstRun ? 'onboard' : 'auth'}
        screenOptions={{
          headerShown: false
        }}
      >
        {props.apps.firstRun ? <Stack.Screen name="onboard" component={OnBoardGate} />
          : props.auth.data.tokenLogin
            ? <Stack.Screen name="main" component={MainGate} />
            : <Stack.Screen name="auth" component={AuthGate} />
        }
      </Stack.Navigator>
    </>
  );
};

const mapStateToProps = state => ({
  apps: state.apps,
  auth: state.auth
})

const mapDispatchToProps = {
  firstRun
}

export default connect(mapStateToProps, mapDispatchToProps)(RootGate);
