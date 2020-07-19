import React from 'react'
import { View } from 'react-native'
import { ScreenHeader, ScreenSearch, ScreenFilter, ScreenGridItems } from 'components'
import { searchStyles as styles } from 'assets/styles'

const SearchAllBooks = (props) => {
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
  const booksData = [
    {
      book_id: 1,
      title: 'Book 1',
      author_name: 'Author 1',
      genre_name: 'Genre 1'
    },
    {
      book_id: 2,
      title: 'Book 2',
      author_name: 'Author 2',
      genre_name: 'Genre 2'
    },
    {
      book_id: 3,
      title: 'Book 3',
      author_name: 'Author 3',
      genre_name: 'Genre 3'
    },
    {
      book_id: 4,
      title: 'Book 4',
      author_name: 'Author 4',
      genre_name: 'Genre 4'
    },
  ]
  return (
    <>
      <View style={styles.container}>
        <ScreenHeader navigation={props.navigation} title="Search..." />
        <ScreenSearch navigation={props.navigation} route={props.route} />
        <ScreenFilter filterItems={filterItems} />
        <ScreenGridItems navigation={props.navigation} booksData={booksData} />
      </View>
    </>
  )
}

export default SearchAllBooks;