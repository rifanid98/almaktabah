import React, { useEffect } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { organismsStyles as styles} from 'assets/styles';
import { SearchGridItem } from 'components/molecules';

const ScreenGridItems = (props) => {
  
  useEffect(() => {
    
  }, [])
  const books = props.booksData.length ? props.booksData : []
  return (
    <>
      <ScrollView>
        <View style={styles.gridItems}>
          {books.map((book, index) => (
            <SearchGridItem
              key={index}
              bookId={book.book_id}
              image={book.image}
              title={book.title}
              author_name={book.author_name}
              genre_name={book.genre_name}
              description={book.description}
              navigation={props.navigation}
            />
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default ScreenGridItems;