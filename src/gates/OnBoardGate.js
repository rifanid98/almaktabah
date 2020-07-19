import React, { useEffect } from 'react'
import { Slide1, Slide2, Slide3 } from 'screens';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const OnBoardGate = (props) => {
  const Tab = createMaterialTopTabNavigator();
  const {
    getStarted
  } = props;


  return (
    <>
      <Tab.Navigator
        initialRouteName='Slide1'
        tabBarOptions={{
          style: {
            height: 0
          }
        }}
      >
        <Tab.Screen name="slide1" component={Slide1} />
        <Tab.Screen name="slide2" component={Slide2} />
        <Tab.Screen name="slide3" component={Slide3} />
      </Tab.Navigator>
    </>
  )
}

export default OnBoardGate;