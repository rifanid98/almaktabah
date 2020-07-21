import React, { useEffect, useState } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { ScreenHeader, ScreenFilter, ScreenGridItems, GenresList, NotFound, Errors, Success } from 'components'
import { searchStyles as styles } from 'assets/styles'
import { connect } from 'react-redux'
import { createUrlParamFromObj, alert } from 'utils'
import { getBooks } from 'modules'

const SearchBookByCategory = (props) => {
  const [books, setBooks] = useState([])
  const genresData = props.route.params.data
  const filterItems = {
    sortType: {
      asc: 'A-Z',
      desc: 'Z-A'
    },
    sortBy: {
      date: 'newest'
    }
  }
  // get data when user choosed one category from home screen
  useEffect(() => {
    getBookByCategory(props.route.params.name)
  }, [])

  const getBookByCategory = (categoryName) => {
    const categories = { genre: categoryName };
    const params = createUrlParamFromObj(categories);
    const token = props.auth.data.tokenLogin;
    token
      // ? props.getBooks(token)
      ? props.getBooks(token, params)
        .then((res) => {
          
        }).catch((error) => {
          console.log(error, `get books by genre (category) failed`)
        })
      : alert('Token Failed', 'Cannot find token...')
  }
  return (
    <>
      <View style={styles.container}>
        <ScreenHeader navigation={props.navigation} title="Categories" />
        <View style={styles.categoriesItems}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
            <GenresList navigation={props.navigation} genresData={genresData} onPress={(genreName) => getBookByCategory(genreName)}/>
          </ScrollView>
        </View>
        <ScreenFilter filterItems={filterItems} />
        {
          props.books.data.result === undefined
            ? props.books.data === undefined
              ? <NotFound />
              : (
                <ScreenGridItems
                  navigation={props.navigation}
                  booksData={props.books.data}
                />
              )
            : (
              <ScreenGridItems
                navigation={props.navigation}
                booksData={props.books.data.result}
              />
            )
        }
        {props.books.data.isLoading && <Text style={{  justifyContent: 'flex-start', marginTop: 10, textAlign: 'center', backgroundColor: 'white' }}>Loading...</Text> }
      </View>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  books: state.books
})

const mapDispatchToProps = {
  getBooks
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBookByCategory);