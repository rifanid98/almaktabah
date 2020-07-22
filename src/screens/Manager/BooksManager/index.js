import React, { useEffect } from 'react'
import { View, Text, Alert } from 'react-native'
import { ListItems, FixedAddButton } from 'components'
import { managerStyles as manager, moleculesStyles as molecules } from 'assets/styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { getDataById, createUrlParamFromObj } from 'utils'
import { connect } from 'react-redux'
import { getBooks, deleteBook } from 'modules'

const BooksManager = (props) => {
  useEffect(() => {
    getBooks()
  }, [])
  const getData = (datas) => {
    let collection = []

    // Interface Setter

    datas
      ? datas.length > 0
        ? datas.map((data, index) => {
          collection.push({
            image: getItemImage(data),
            info: getItemInfo(data)
          })
        })
        : []
      : []
    
    return collection;
  }
  const getItemImage = (item) => {
    return item.image
  }
  const getItemInfo = (item) => {
    return (
      <>
        <Text style={molecules.listItemTitle}>{item.title}</Text>
        <Text style={molecules.listItemBody}>{item.author_name}</Text>
        <Text style={molecules.listItemBodyHighlight}>{item.genre_name}</Text>
        <Text style={molecules.listItemBody}>Reads</Text>
        <View style={molecules.listItemAction}>
          <Text
            style={[molecules.listItemEdit, molecules.listItemActionItem]}
            onPress={() => showEditModal(item.book_id)}
          >
            <FontAwesomeIcon style={molecules.listItemActionIcon} icon={faEdit} />
            Edit
          </Text>
          <Text
            style={[molecules.listItemDelete, molecules.listItemActionItem]}
            onPress={() => deleteBook(item.book_id)}
          >
            <FontAwesomeIcon style={molecules.listItemActionIcon} icon={faTrashAlt} />
            Delete
          </Text>
        </View>
      </>
    )
  }

  const showEditModal = (bookId) => {
    props.navigation.navigate('modal', { screen: 'book', type: 'edit', data: getDataById(props.books.data.result, 'book_id', bookId) })
  }

  const showAddModal = () => {
    props.navigation.navigate('modal', { screen: 'book', type: 'add' })
  }
  
  const getBooks = () => {
    const pagination = {
      page: 1,
      limit: 10
    }
    const params = createUrlParamFromObj(pagination);
    const token = props.auth.data.tokenLogin;
    token
      ? props.getBooks(token, params)
        .then((res) => {
          
        }).catch((error) => {
          console.log(`get books failed`)
        })
      : alert('Token Failed', 'Cannot find token...')
  }
  const deleteBook = (bookId) => {
    const token = props.auth.data.tokenLogin;
    Alert.alert(
      "Delete this book ?",
      "This action cannot be undone!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            props.deleteBook(token, bookId)
              .then((res) => {
                alert('Delete Success', 'Book Deleted Successfully')
                getBooks()
              }).catch((error) => {
                console.log(error);
                error.response.data.message
                  ? alert('Failed', error.response.data.message)
                  : alert('Failed', 'Delete Genre Failed. Please try again later')
              })
          }
        }
      ],
      { cancelable: false }
    );
  }
  return (
    <>
      <View style={{
        paddingTop: 10,
        backgroundColor: 'white',
        position: 'relative'
      }}>
        <ListItems data={getData(props.books.data.result)} layout="listItemWithImage" />
        <FixedAddButton onPress={() => showAddModal()}/>
      </View>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  books: state.books
})

const mapDispatchToProps = {
  getBooks,
  deleteBook
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksManager);