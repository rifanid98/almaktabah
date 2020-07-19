import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { ScreenHeader, ScreenFilter, GenresList } from 'components'
import { managerStyles as styles } from 'assets/styles'
import { AuthorsManager, BooksManager, GenresManager, UsersManager } from '..'

const Manager = (props) => {
  const [initialScreen, setInitialScreen] = useState('books')
  const showScreen = (getScreen) => {
    switch (getScreen) {
      case 'books':
        return <BooksManager {...props}/>
      
      case 'genres':
        return <GenresManager {...props}/>
      
      case 'authors':
        return <AuthorsManager {...props}/>
      
      case 'users':
        return <UsersManager {...props}/>
    
      default:
        return <BooksManager {...props}/>
        break;
    }
  }
  const filterItems = {
    sortType: {
      asc: 'A-Z',
      desc: 'Z-A'
    },
    sortBy: {
      genre: 'genre',
      date: 'newest'
    }
  }
  return (
    <>
      <View style={styles.container}>
        <ScreenHeader navigation={props.navigation} title="Manager" />
        <View style={styles.categories}>
            <Text style={styles.categoryText} onPress={() => setInitialScreen('books')}>Books</Text>
            <Text style={styles.categoryText} onPress={() => setInitialScreen('genres')}>Genres</Text>
            <Text style={styles.categoryText} onPress={() => setInitialScreen('authors')}>Authors</Text>
            <Text style={styles.categoryText} onPress={() => setInitialScreen('users')}>Users</Text>
        </View>
        <ScreenFilter filterItems={filterItems} />
        {showScreen(initialScreen)}
      </View>
    </>
  )
}

export default Manager;