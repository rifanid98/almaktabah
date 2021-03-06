import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Detail, Profile, Manager, Modal, MyHistory, MyBook } from 'screens'
import { SearchAllBooks, SearchBookByCategory } from 'screens/Search';
import ManagerGate from './ManagerGate';

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
        <Stack.Screen name="manager" component={ManagerGate} />
        <Stack.Screen name="modal" component={Modal} />
        <Stack.Screen name="myHistory" component={MyHistory} />
        <Stack.Screen name="myBook" component={MyBook} />
      </Stack.Navigator>
    </>
  )
}

export default MainGate;