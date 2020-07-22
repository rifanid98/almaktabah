import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { ScreenHeader, ScreenSearch, ScreenFilter, ScreenGridItems, Errors, Loading, Search, Empty } from 'components'
import { searchStyles as styles } from 'assets/styles'
import { connect } from 'react-redux'
import { getBooks } from 'modules'
import { createUrlParamFromObj } from 'utils'

const SearchAllBooks = (props) => {
  const [search, setSearch] = useState(false)
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
  useEffect(() => {
    console.log(props.books, 'props books');
  }, [props.books])

  const getBooksByKeyword = (keyword) => {
    setSearch(true)
    const search = {
      author: keyword,
      genre: keyword,
      description: keyword,
      title: keyword,
      added: keyword,
      page: 1,
      limit: 10
    }
    const params = createUrlParamFromObj(search);
    console.log(params);
    const token = props.auth.data.tokenLogin
    if (token) {
      props.getBooks(token, params)
        .then((res) => {
          
        }).catch((error) => {
          console.log(`get books by keyword failed`)
        })
    }
  }
  return (
    <>
      <View style={styles.container}>
        <ScreenHeader navigation={props.navigation} title="Search..." />
        <ScreenSearch navigation={props.navigation} route={props.route} onPress={(keyword) => getBooksByKeyword(keyword)} />
        <ScreenFilter filterItems={filterItems} />
        {
          search
            ? props.books.isLoading
              ? <Loading />
              : props.books.data.result
                ? props.books.data.result.length > 0
                  ? <ScreenGridItems navigation={props.navigation} booksData={props.books.data.result} />
                  : <Empty />

              : props.books.data
                  ? props.books.data.length > 0
                    ? <ScreenGridItems navigation={props.navigation} booksData={props.books.data} />
                    : <Empty />
                  : <Erros />
                
            : <Search />
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchAllBooks)