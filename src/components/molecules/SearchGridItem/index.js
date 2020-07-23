import React from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { moleculesStyles as styles } from 'assets/styles';

const SearchGridItem = (props) => {
  const goToDetailBook = (data) => {
    props.navigation.navigate('detail', { data: data })
  }
  const image = { uri: props.image }
  return (
    <>
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => goToDetailBook(props)}>
        <Image style={styles.bookImage} source={image} resizeMethod="resize"/>
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