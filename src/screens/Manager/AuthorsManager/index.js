import React from 'react'
import { View, Text } from 'react-native'
import { ListItems } from 'components'
import { managerStyles as manager, moleculesStyles as molecules } from 'assets/styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { getDataById } from 'utils'

const AuthorsManager = (props) => {
  const authorsData = [
    {
      author_id: 1,
      name: 'Author 1',
    },
    {
      author_id: 2,
      name: 'Author 2',
    },
    {
      author_id: 3,
      name: 'Author 3',
    },
    {
      author_id: 4,
      name: 'Author 4',
    },
  ]
  
  const getData = (datas) => {
    let collection = []

    // Interface Setter
    let i = 1
    datas.map((data, index) => {
      data.number = i
      collection.push({
        image: getItemImage(data),
        info: getItemInfo(data)
      })
      i++;
    })
    
    return collection;
  }
  
  const getItemImage = (item) => {
    return item.image
  }

  const getItemInfo = (item) => {
    return (
      <>
        <Text style={molecules.listItemTitleNoImage}>{item.number}.</Text>
        <Text style={molecules.listItemBodyNoImage}>{item.name}</Text>
        <View style={molecules.listItemActionNoImage}>
          <Text
            style={[molecules.listItemEditNoImage, molecules.listItemActionItemNoImage]}
            onPress={() => showModal(item.author_id)}
          >
            <FontAwesomeIcon style={molecules.listItemActionIconNoImage} icon={faEdit} />
            Edit
          </Text>
          <Text style={[molecules.listItemDeleteNoImage, molecules.listItemActionItemNoImage]}>
            <FontAwesomeIcon style={molecules.listItemActionIconNoImage} icon={faTrashAlt} />
            Delete
          </Text>
        </View>
      </>
    )
  }

  const showModal = (authorId) => {
    props.navigation.navigate('modal', { screen: 'author', data: getDataById(authorsData, 'author_id', authorId) })
  }

  return (
    <>
      <ListItems data={getData(authorsData)} layout="listItemNoImage" />
    </>
  )
}

export default AuthorsManager;