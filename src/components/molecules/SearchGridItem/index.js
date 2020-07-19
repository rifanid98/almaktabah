import React from 'react'
import { Text, View, Image } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { moleculesStyles as styles } from 'assets/styles';

const SearchGridItem = (props) => {
  const goToDetailBook = (bookId) => {
    props.navigation.navigate('detail', { bookId: bookId })
  }
  return (
    <>
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => goToDetailBook(props.bookId)}>
        <Image style={styles.bookImage}
          source={require('assets/images/default.png')}
        />
        <View style={styles.bookInfo}>
          <Text style={styles.title}>{props.title.length > 14 ? `${props.title.substring(0, 14)}...` : `${props.title}`}</Text>
          <Text style={styles.author}>{props.author_name.length > 14 ? `${props.author_name.substring(0, 14)}...` : `${props.author_name}`}</Text>
          <Text style={styles.genre}>{props.genre_name.length > 14 ? `${props.genre_name.substring(0, 14)}...` : `${props.genre_name}`}</Text>
          <Text style={styles.reads}>1000 Reads</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

export default SearchGridItem;