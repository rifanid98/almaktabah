import React from 'react'
import { View, Text } from 'react-native'
import { ListItems } from 'components'
import { managerStyles as manager, moleculesStyles as molecules } from 'assets/styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { getDataById } from 'utils'

const BooksManager = (props) => {
  const booksData = [
    {
      book_id: 1,
      title: 'Book 1',
      author_name: 'Author 1',
      genre_name: 'Genre 1',
      image: 'http:///192.168.42.15:3000/libraryapp-api/images/2020-06-17T05:00:48.720ZHideaway.jpg'
    },
    {
      book_id: 2,
      title: 'Book 2',
      author_name: 'Author 2',
      genre_name: 'Genre 2',
      image: 'http:///192.168.42.15:3000/libraryapp-api/images/2020-06-17T05:00:48.720ZHideaway.jpg'
    },
    {
      book_id: 3,
      title: 'Book 3',
      author_name: 'Author 3',
      genre_name: 'Genre 3',
      image: 'http:///192.168.42.15:3000/libraryapp-api/images/2020-06-17T05:00:48.720ZHideaway.jpg'
    },
    {
      book_id: 4,
      title: 'Book 4',
      author_name: 'Author 4',
      genre_name: 'Genre 4',
      image: 'http:///192.168.42.15:3000/libraryapp-api/images/2020-06-17T05:00:48.720ZHideaway.jpg'
    },
  ]

  const getData = (datas) => {
    let collection = []

    // Interface Setter
    datas.map((data, index) => {
      collection.push({
        image: getItemImage(data),
        info: getItemInfo(data)
      })
    })
    
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
            onPress={() => showModal(item.book_id)}
          >
            <FontAwesomeIcon style={molecules.listItemActionIcon} icon={faEdit} />
            Edit
          </Text>
          <Text style={[molecules.listItemDelete, molecules.listItemActionItem]}>
            <FontAwesomeIcon style={molecules.listItemActionIcon} icon={faTrashAlt} />
            Delete
          </Text>
        </View>
      </>
    )
  }

  const showModal = (bookId) => {
    props.navigation.navigate('modal', { screen: 'book', data: getDataById(booksData, 'book_id', bookId) })
  }
  
  return (
    <>
      <ListItems data={getData(booksData)} layout="listItemWithImage" />
    </>
  )
}

export default BooksManager;