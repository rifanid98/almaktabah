import React, { useState, useEffect } from 'react'
import { View, Text, Alert } from 'react-native'
import { ScreenHeader } from 'components'
import { templateStyles as template } from 'assets/styles'
import { connect } from 'react-redux'
import { getHistories, getPendingHistories, returnBook } from 'modules'

const MyBook = (props) => {
  const user = props.auth.data;
  const [borrowed, setBorrowed] = useState([])
  useEffect(() => {
    props.getHistories(props.auth.data.tokenLogin)
    checkBorrowedBook();
  }, [])

  const checkBorrowedBook = async () => {
    const token = user.tokenLogin;
    const userId = user.user_id;
    props.getPendingHistories(token, userId)
      .then((res) => {
        const borrowed = res.value.data.data;
        setBorrowed(borrowed);
      }).catch((error) => {
        console.log(error)
        console.log(`get pendingHistories failed`)
      })
  }
  const returnBook = (bookId) => {
    const token = user.tokenLogin;
    props.returnBook(token, bookId)
      .then((res) => {
        if (res.value.status === 200) {
          Alert.alert('Return Book Success', 'Book returned successfully')
          checkBorrowedBook();
        }
      }).catch((error) => {
        error.response.data.message
          ? Alert.alert('Return Book Failed', error.response.data.message)
          : Alert.alert('Return Book Failed', 'Please try again later')
      })
  }
  return (
    <>
      <View style={template.container}>
        <ScreenHeader navigation={props.navigation} title="My Book" />
        {borrowed
          ? borrowed.length > 0
            ? borrowed.map((item, index) => {
              console.log(item)
              return (
                <View
                  style={{
                    borderRadius: 3,
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    padding: 10,
                    marginBottom: 5
                  }}>
                  <Text>Title: {item.title}</Text>
                  <Text style={{
                    backgroundColor: 'orange',
                    color: 'white',
                    padding: 5,
                    width: 50,
                    borderRadius: 5
                  }}
                    onPress={() => returnBook(item.book_id)}>Return</Text>
                </View>
              )
            })
            : <></>
          : <></>}
      </View>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  histories: state.histories
})

const mapDispatachToProps = {
  getHistories,
  getPendingHistories,
  returnBook
}

export default connect(mapStateToProps, mapDispatachToProps)(MyBook);