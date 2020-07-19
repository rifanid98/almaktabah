import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Detail, Profile, Manager, Modal } from 'screens'
import { SearchAllBooks, SearchBookByCategory } from 'screens/Search';

const MainGate = (props) => {
  const Stack = createStackNavigator();
  const {
    getStarted
  } = props;
  

  return (
    <>
      <Stack.Navigator
        initialRouteName='home'
        screenOptions={{
          headerShown: false,
          headerStyle: {
            borderBottomWidth: 0,
            elevation: 0
          }
        }}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="detail" component={Detail} />
        <Stack.Screen name="searchAllBooks" component={SearchAllBooks} />
        <Stack.Screen name="searchBookByCategory" component={SearchBookByCategory} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="manager" component={Manager} />
        <Stack.Screen name="modal" component={Modal} />
      </Stack.Navigator>
    </>
  )
}

export default MainGate;