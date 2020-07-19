import React from 'react'
import { View, ScrollView } from 'react-native'
import { ScreenHeader, ScreenFilter, ScreenGridItems, GenresList } from 'components'
import { searchStyles as styles } from 'assets/styles'

const SearchBookByCategory = (props) => {
  const filterItems = {
    sortType: {
      asc: 'A-Z',
      desc: 'Z-A'
    },
    sortBy: {
      date: 'newest'
    }
  }
  const genresData = [
    {
      genre_id: 1,
      genre_name: 'Genre 1'
    },
    {
      genre_id: 2,
      genre_name: 'Genre 2'
    },
    {
      genre_id: 3,
      genre_name: 'Genre 3'
    },
    {
      genre_id: 4,
      genre_name: 'Genre 4'
    },
    {
      genre_id: 1,
      genre_name: 'Genre 1'
    },
    {
      genre_id: 2,
      genre_name: 'Genre 2'
    },
    {
      genre_id: 3,
      genre_name: 'Genre 3'
    },
    {
      genre_id: 4,
      genre_name: 'Genre 4'
    },
  ]
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
        <ScreenHeader navigation={props.navigation} title="Categories" />
        <View style={styles.categoriesItems}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
            <GenresList navigation={props.navigation} genresData={genresData} />
          </ScrollView>
        </View>
        <ScreenFilter filterItems={filterItems} />
        <ScreenGridItems navigation={props.navigation} booksData={booksData} />
      </View>
    </>
  )
}

export default SearchBookByCategory;