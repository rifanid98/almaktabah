import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { organismsStyles as styles} from 'assets/styles';
import { SearchGridItem } from 'components/molecules';

const ScreenGridItems = (props) => {
  const books = props.booksData
  return (
    <>
      <ScrollView>
        <View style={styles.gridItems}>
          {books.map((book, index) => (
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
      </ScrollView>
    </>
  )
}

export default ScreenGridItems;