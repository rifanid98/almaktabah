/**
 * React Navigation
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

/**
 * @Redux
 */
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from 'modules';

/**
 * Screens's Route
 */
import { screenRoutes } from 'screens';

const App = () => {
  const persistor = persistStore(store);
  const Stack = createStackNavigator();

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName='Login'
              screenOptions={{
                headerStyle: {
                  borderBottomWidth: 0,
                  elevation: 0
                }
              }}
            >
              {screenRoutes.map((screen, index) => <Stack.Screen name={screen.name} component={screen.component} options={screen.options} />)}
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
