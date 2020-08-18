import React, { useEffect, useState } from 'react'
import { Text, View, Image } from 'react-native'
import { detailStyles as styles } from 'assets/styles'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { checkPendingHistory, borrowBook, returnBook } from 'modules';
import { ScreenHeader } from 'components';
import { alert } from 'utils';
import { appConfig } from 'configs';

const Detail = (props) => {
  const data = props.route.params.data
  const [borrowed, setBorrowed] = useState(false)

  useEffect(() => {
    checkBorrowedBook()
  }, [])

  const checkBorrowedBook = () => {
    const token = props.auth.data.tokenLogin;
    const bookId = data.book_id;
    const userId = props.auth.data.user_id;
    
    props.checkPendingHistory(token, bookId, userId)
      .then((res) => {
        let pendingHistories = false
        res.value.data.data.length > 0
          ? pendingHistories = true
          : false
        setBorrowed(pendingHistories)
      }).catch((error) => {
        console.log(error)
        console.log(`get pendingHistories failed`)
      })
  }
  const borrowBook = () => {
    const token = props.auth.data.tokenLogin;
    const bookId = data.book_id;
    props.borrowBook(token, bookId)
      .then((res) => {
        if (res.value.status === 200) {
          // getDetailBooks();
          checkBorrowedBook();
          alert('Borrow Book Success', 'Book borrowed successfully')
        }
      }).catch((error) => {
        // console.log(error.response.data);
        error.response.data.message
          ? alert('Borrow Book Failed', error.response.data.message)
          : alert('Borrow Book Failed', 'Please try again later')
      })
  }
  const returnBook = () => {
    const token = props.auth.data.tokenLogin;
    const bookId = data.book_id;
    props.returnBook(token, bookId)
      .then((res) => {
        if (res.value.status === 200) {
          // getDetailBooks();
          checkBorrowedBook();
          alert('Return Book Success', 'Book returned successfully')
        }
      }).catch((error) => {
        // console.log(error.response.data);
        error.response.data.message
          ? alert('Return Book Failed', error.response.data.message)
          : alert('Return Book Failed', 'Please try again later')
      })
  }
  return (
    <>
      <View style={styles.container}>
        <ScreenHeader navigation={props.navigation} title="Detail Book"/>
        
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.image}>
              <Image style={styles.bookImage} source={{ uri: appConfig.url.assets + '/' + data.image }} resizeMethod="resize" />
            </View>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.author}>{data.author_name}</Text>
            <Text style={styles.description}>{data.description}</Text>
          </View>
        </ScrollView>
        {
          borrowed ? (
            <>
              <TouchableOpacity 
              style={styles.button2}
              onPress={() => returnBook()}
              >
                <Text style={styles.buttonText}>Return</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
               style={styles.button}
               onPress={() => borrowBook()}
               >
                <Text style={styles.buttonText}>Borrow</Text>
              </TouchableOpacity>
            </>
          )
        }
      </View>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = {
  checkPendingHistory,
  borrowBook,
  returnBook 
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);