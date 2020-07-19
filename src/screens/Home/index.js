import React, { useEffect } from 'react'
import { Text, View, TextInput, Alert, Image, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import { logout } from 'modules';
import { mainStyles as styles} from 'assets/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SearchGridItem, GenresList } from 'components';

const Home = (props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      search: 'Search...'
    }
  });
  const onSubmit = data => {
    props.navigation.navigate('searchAllBooks', { keyword: data.search })
  }
  const goToDetailBook = (bookId) => {
    props.navigation.navigate('detail', {bookId: bookId})
  }
  const goToCategories = (genreId) => {
    props.navigation.navigate('searchBookByCategory', { genreId: genreId})
  }
  const logout = () => {
    props.logout()
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
  /**
   * Components
   */
  const Header = () => {
    return (
      <>
        <View style={styles.header}>
          <Text style={styles.brand}>Al-Maktabah</Text>
          <View style={styles.info}>
            <View style={styles.dates}>
              <Text style={styles.mainDate}>30</Text>
              <View style={styles.detailDate}>
                <Text style={styles.day}>Thu</Text>
                <Text style={styles.monthYear}>Jul, 2020</Text>
              </View>
            </View>
            <View style={styles.admin}>
              <Text style={styles.adminIcon} onPress={() => props.navigation.navigate('manager', { user_id: 1 })}>
                <FontAwesomeIcon icon={faFolderOpen} size={30} />
              </Text>
            </View>
            <View>
              <View style={styles.profileIcon}>
                <Text style={styles.myText} onPress={() => props.navigation.navigate('profile', { user_id: 1 })}>
                  {/* profile */}
                  <Image
                    style={styles.profileImage}
                    source={require('assets/images/avatar.png')}
                  />
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.search}>
            <View style={styles.formControl}>
              <Controller control={control} render={({ onChange, onBlur, value }) => (
                <TextInput
                  name="search"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
                name="search" defaultValue=""
              />
            </View>
            <Text
              style={styles.button}
              onPress={handleSubmit(onSubmit)}
            >
              <FontAwesomeIcon icon={faSearch} size={20} color='black' />
            </Text>
          </View>
        </View>
        
      </>
    )
  }
  const NewArrivals = () => {
    return (
      <>
        {/* New Arrivals */}
        <View style={styles.newArrivals}>
          <Text style={styles.newArrivalsTitle}>New Arrivals</Text>
          <View style={styles.newArrivalsItems}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
              <TouchableOpacity style={styles.newArrivalsItem} onPress={() => goToDetailBook('1')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
              <TouchableOpacity style={styles.newArrivalsItem} onPress={() => goToDetailBook('2')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
              <TouchableOpacity style={styles.newArrivalsItem} onPress={() => goToDetailBook('3')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
              <TouchableOpacity style={styles.newArrivalsItem} onPress={() => goToDetailBook('4')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
              <TouchableOpacity style={styles.newArrivalsItem} onPress={() => goToDetailBook('5')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
              <TouchableOpacity style={styles.newArrivalsItem} onPress={() => goToDetailBook('6')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
              <TouchableOpacity style={styles.newArrivalsItem} onPress={() => goToDetailBook('1')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
              <TouchableOpacity style={styles.newArrivalsItem} onPress={() => goToDetailBook('2')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
              <TouchableOpacity style={styles.newArrivalsItem} onPress={() => goToDetailBook('3')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
              <TouchableOpacity style={styles.newArrivalsItem} onPress={() => goToDetailBook('4')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
              <TouchableOpacity style={styles.newArrivalsItem} onPress={() => goToDetailBook('5')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
              <TouchableOpacity style={styles.newArrivalsItem} onPress={() => goToDetailBook('6')}><Image style={styles.bookImage} source={require('assets/images/default.png')} /></TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </>
    )
  }
  const Categories = () => {
    return (
      <>
        {/* Categories */}
        <View style={styles.categories}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesItems}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
              <GenresList
                genresData={genresData}
                navigation={props.navigation}
              />
            </ScrollView>
          </View>
        </View>
      </>
    )
  }
  const Trending = () => {
    return (
      <>
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
      </>
    )
  }
  const AllBooks = () => {
    return (
      <>
        {/* All Books */}
        <View style={styles.allBooks}>
          <Text style={styles.allBooksTitle}>All Books</Text>
          <View style={styles.allBooksItems}>
            {booksData.map((book, index) => (
              <SearchGridItem
                key={index}
                bookId={book.book_id}
                title={book.title}
                author_name={book.author_name}
                genre_name={book.genre_name}
                navigation={props.navigation}
              />
            ))}
          </View>
        </View>
      </>
    )
  }

  const DATA = [
    {
      id: 1,
      data: <Header />
    },
    {
      id: 2,
      data: <NewArrivals />
    },
    {
      id: 3,
      data: <Categories />
    },
    {
      id: 4,
      data: <Trending />
    },
    {
      id: 5,
      data: <AllBooks />
    },
  ];
  const Item = ({ data }) => (
    <>
      {data}
    </>
  );
  const renderItem = ({ item }) => (
    <Item data={item.data} />
  );
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </SafeAreaView>
      </View>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);