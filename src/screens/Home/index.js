import React, { Component } from 'react'
import { Text, View, TextInput, Alert, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { logout, getBooks } from 'modules';
import { mainStyles as styles} from 'assets/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SearchGridItem, GenresList } from 'components';
import { createUrlParamFromObj, alert } from 'utils';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      loading: false,
      pagination: {
        page: 1,
        limit: 3
      },

      books: this.props.books.data.result ? this.props.books.data.result : [],
      genresData: [
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

    }
  }
  /**
   * LifeCycles
   */
  componentDidMount() {
    this.checkAuth()
    this.getBooks()
  }

  componentDidUpdate() {
    console.log(this.props.books)
  }

  logout () {
    this.props.logout()
  }


  /**
   * Logics
   */
  checkAuth() {
    !this.props.auth.data.tokenLogin && this.props.navigation.navigate('auth')
  }
  logout() {
    this.props.logout()
  }
  moreBooks () {
    this.setState({
      ...this.state,
      page: this.state.pagination.page+1
    }, () => {
      console.log('changed state')
        this.getBooks()
    })
  }
  goToDetailBook (bookId) {
    this.props.navigation.navigate('detail', { bookId: bookId })
  }
  goToCategories (genreId) {
    this.props.navigation.navigate('searchBookByCategory', { genreId: genreId })
  }

  /**
   * API Services
   */
  getBooks() {
    const params = createUrlParamFromObj(this.state.pagination);
    const token = this.props.auth.data.tokenLogin;
    token
      ? this.props.getBooks(token, params)
        .then((res) => {

        }).catch((error) => {
          console.log(`get books failed`)
        })
      : alert('Token Failed', 'Cannot find token...')
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <ScrollView>
            {/* Header */}
            <View style={styles.header}>
              {/* Brand */}
              <Text style={styles.brand}>Al-Maktabah</Text>
              {/* Info */}
              <View style={styles.info}>
                <View style={styles.dates}>
                  <Text style={styles.mainDate}>30</Text>
                  <View style={styles.detailDate}>
                    <Text style={styles.day}>Thu</Text>
                    <Text style={styles.monthYear}>Jul, 2020</Text>
                  </View>
                </View>
                <View style={styles.admin}>
                  <Text style={styles.adminIcon} onPress={() => this.props.navigation.navigate('manager', { user_id: 1 })}>
                    <FontAwesomeIcon icon={faFolderOpen} size={30} />
                  </Text>
                </View>
                <View>
                  <View style={styles.profileIcon}>
                    <Text style={styles.myText} onPress={() => this.props.navigation.navigate('profile', { user_id: 1 })}>
                      {/* profile */}
                      <Image
                        style={styles.profileImage}
                        source={require('assets/images/avatar.png')}
                      />
                    </Text>
                  </View>
                </View>
              </View>
              {/* Search */}
              <View style={styles.search}>
                <View style={styles.formControl}>
                  <TextInput
                    name="search"
                    style={styles.input}
                    onFocus={() => this.props.navigation.navigate('searchAllBooks')}
                    placeholder="Search..."
                  />
                </View>
                <Text
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('searchAllBooks')}
                >
                  <FontAwesomeIcon icon={faSearch} size={20} color='black' />
                </Text>
              </View>
            </View>
            {/* New Arrivals */}
            <View style={styles.newArrivals}>
              <Text style={styles.newArrivalsTitle}>New Arrivals</Text>
              <View style={styles.newArrivalsItems}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                  <TouchableOpacity style={styles.newArrivalsItem} onPress={() => this.goToDetailBook('1')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.newArrivalsItem} onPress={() => this.goToDetailBook('2')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.newArrivalsItem} onPress={() => this.goToDetailBook('3')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.newArrivalsItem} onPress={() => this.goToDetailBook('4')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.newArrivalsItem} onPress={() => this.goToDetailBook('5')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.newArrivalsItem} onPress={() => this.goToDetailBook('6')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.newArrivalsItem} onPress={() => this.goToDetailBook('1')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.newArrivalsItem} onPress={() => this.goToDetailBook('2')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.newArrivalsItem} onPress={() => this.goToDetailBook('3')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.newArrivalsItem} onPress={() => this.goToDetailBook('4')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.newArrivalsItem} onPress={() => this.goToDetailBook('5')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.newArrivalsItem} onPress={() => this.goToDetailBook('6')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                </ScrollView>
              </View>
            </View>
            {/* Categories */}
            <View style={styles.categories}>
              <Text style={styles.categoriesTitle}>Categories</Text>
              <View style={styles.categoriesItems}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                  <GenresList
                    genresData={this.state.genresData}
                    navigation={this.props.navigation}
                  />
                </ScrollView>
              </View>
            </View>
            {/* Trending */}
            <View style={styles.trending}>
              <Text style={styles.trendingTitle}>Trending This Week</Text>
              <View style={styles.trendingItems}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                  <TouchableOpacity style={styles.trendingItem}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.trendingItem}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.trendingItem}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.trendingItem}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.trendingItem}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.trendingItem}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.trendingItem}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.trendingItem}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.trendingItem}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.trendingItem}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.trendingItem}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                  <TouchableOpacity style={styles.trendingItem}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
                </ScrollView>
              </View>
            </View>
            {/* All Books */}
            <View style={styles.allBooks}>
              <Text style={styles.allBooksTitle}>All Books</Text>
              <View style={styles.allBooksItems}>
                {
                  this.state.books.map((book, index) => (
                    <SearchGridItem
                      key={index}
                      bookId={book.book_id}
                      title={book.title}
                      author_name={book.author_name}
                      genre_name={book.genre_name}
                      navigation={this.props.navigation}
                    />
                  ))
                }
                <Text
                  style={{ textAlign: 'center', flex: 1, padding: 20, backgroundColor: 'orange' }}
                  onPress={() => this.moreBooks()}
                >{this.state.loading ? 'Loading...' : 'Load More'}</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  genres: state.genres,
  books: state.books
})

const mapDispatchToProps = {
  logout,
  getBooks
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);