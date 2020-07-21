import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScreenHeader, Loading } from 'components';
import { BooksManager, AuthorsManager, GenresManager, UsersManager } from 'screens/Manager';
import { managerStyles as styles } from 'assets/styles'

const ManagerGate = (props) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <>
      <View style={styles.container}>
        <ScreenHeader navigation={props.navigation} title="Manager" />
        <Tab.Navigator
          initialRouteName='booksManager'
          backBehavior="initialRoute"
          lazy={true}
          lazyPlaceholder={Loading}
          removeClippedSubviews={true}
        >
          <Tab.Screen name="booksManager" component={BooksManager} options={{ title: 'Books' }} />
          <Tab.Screen name="genresManager" component={GenresManager} options={{ title: 'Genres' }} />
          <Tab.Screen name="authorsManager" component={AuthorsManager} options={{ title: 'Authors' }} />
          <Tab.Screen name="usersManager" component={UsersManager} options={{ title: 'Users' }} />
        </Tab.Navigator>
    </View>
    </>
  )
}

export default ManagerGate;