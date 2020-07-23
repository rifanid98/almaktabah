import React, { Component } from 'react'
import { Text, View, TextInput, Alert, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { logout, getBooks, getUsedGenres } from 'modules';
import { mainStyles as styles} from 'assets/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faFolderOpen, faBook, faHistory } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SearchGridItem, GenresList } from 'components';
import { createUrlParamFromObj, alert, convertDate } from 'utils';
import Animated from 'react-native-reanimated';

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
      genresData: this.props.genres.data ? this.props.genres.data : []

    }
  }
  /**
   * LifeCycles
   */
  componentDidMount() {
    this.checkAuth()
    this.getBooks()
    this.getUsedGenres()
  }
  componentDidUpdate() {
    
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
  goToDetailBook (data) {
    this.props.navigation.navigate('detail', { data: data })
  }
  goToCategories = (genreName) => {
    this.props.navigation.navigate('searchBookByCategory', { name: genreName })
  }
  refreshState = () => {
    this.checkAuth()
    this.getBooks()
    this.getUsedGenres()
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
          this.setState({
            ...this.state,
            books: this.props.books.data.result
          })
        }).catch((error) => {
          console.log(`get books failed`)
        })
      : alert('Token Failed', 'Cannot find token...')
  }
  getUsedGenres() {
    const token = this.props.auth.data.tokenLogin;
    token
      ? this.props.getUsedGenres(token)
        .then((res) => {
          this.setState({
            ...this.state,
            genres: this.props.genres.data
          })
        }).catch((error) => {
          console.log(`get genres failed`)
        })
      : alert('Token Failed', 'Cannot find token...')
  }
  loadMoreBook = () => {
    this.setState({
      ...this.state,
      pagination: {
        ...this.state.pagination,
        page: this.state.pagination.page+1
      }
    }, () => {
        const params = createUrlParamFromObj(this.state.pagination);
        const token = this.props.auth.data.tokenLogin;
        token
          ? this.props.getBooks(token, params)
            .then((res) => {
              const oldData = this.state.books
              const newData = res.value.data.data.result;
              if (newData.length > 0) {
                console.log(newData)
                newData.map(data => {
                  oldData.push(data)
                })
                this.setState({
                  ...this.state,
                  books: oldData
                })
              } else {
                this.setState({
                  ...this.state,
                  pagination: {
                    ...this.state.pagination,
                    page: this.state.pagination.page-1
                  }
                })
              }
            }).catch((error) => {
              console.log(`get books failed`)
            })
          : alert('Token Failed', 'Cannot find token...')
    })
  }
  isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
  }
  render() {
    const date = convertDate().split(' ');
    return (
      <>
        <View style={styles.container}>
          <ScrollView
            scrollEventThrottle={16}
            onMomentumScrollEnd={({ nativeEvent }) => {
              if (this.isCloseToBottom(nativeEvent)) {
                this.loadMoreBook()
              }
            }}
          >
            {/* Header */}
            <View style={styles.header}>
              {/* Brand */}
              <Text style={styles.brand}>Al-Maktabah</Text>
              {/* Info */}
              <View style={styles.info}>
                <View style={styles.dates}>
                  <Text style={styles.mainDate} onPress={() => this.refreshState()}>{date[0]}</Text>
                  <View style={styles.detailDate}>
                    <Text style={styles.day}>{date[1]}</Text>
                    <Text style={styles.monthYear}>{`${date[2]}, ${date[3]}`}</Text>
                  </View>
                </View>
                <View style={styles.admin}>
                  <Text style={styles.adminIcon} onPress={() => this.props.navigation.navigate('myBook', { user_id: this.props.auth.data.user_id })}>
                    <FontAwesomeIcon icon={faBook} size={30} />
                  </Text>
                  <Text style={styles.adminIcon} onPress={() => this.props.navigation.navigate('myHistory', { user_id: this.props.auth.data.user_id })}>
                    <FontAwesomeIcon icon={faHistory} size={30} />
                  </Text>
                  {
                    this.props.auth.data.role < 3 && (
                      <Text style={styles.adminIcon} onPress={() => this.props.navigation.navigate('manager', { user_id: 1 })}>
                        <FontAwesomeIcon icon={faFolderOpen} size={30} />
                      </Text>
                    )
                  }
                </View>
                
                <View>
                  <View style={styles.profileIcon}>
                    <Text style={styles.myText} onPress={() => this.props.navigation.navigate('profile', { user_id: 1 })}>
                      {/* profile */}
                      <Image
                        style={styles.profileImage}
                        source={{uri: this.props.auth.data.image}}
                        resizeMethod="resize" 
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
                  {
                    this.state.books.map((book, index) => {
                      return (
                        <>
                          <TouchableOpacity
                            key={index}
                            style={styles.newArrivalsItem}
                            onPress={() => this.goToDetailBook(book)} >
                            <Image
                              style={styles.bookImage}
                              source={{ uri: book.image }}
                              resizeMethod="resize" />
                          </TouchableOpacity>
                        </>
                      )
                    })
                  }
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
                    onPress={(genreName) => this.goToCategories(genreName)}
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
                      book_id={book.book_id}
                      image={book.image}
                      title={book.title}
                      author_name={book.author_name}
                      genre_name={book.genre_name}
                      description={book.description}
                      navigation={this.props.navigation}
                    />
                  ))
                }
              </View>
            </View>
          </ScrollView>
          {this.props.books.isLoading && <Text style={{ position: 'absolute', bottom: 20, right: 0, left: 0, textAlign: 'center' }}>Loading...</Text>}
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
  getBooks,
  getUsedGenres
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);