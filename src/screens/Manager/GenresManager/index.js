import React from 'react'
import { View, Text } from 'react-native'
import { ListItems } from 'components'
import { managerStyles as manager, moleculesStyles as molecules } from 'assets/styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { getDataById } from 'utils'

const GenresManager = (props) => {
  const genresData = [
    {
      genre_id: 1,
      name: 'Genre 1',
    },
    {
      genre_id: 2,
      name: 'Genre 2',
    },
    {
      genre_id: 3,
      name: 'Genre 3',
    },
    {
      genre_id: 4,
      name: 'Genre 4',
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
            onPress={() => showModal(item.genre_id)}
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

  const showModal = (genreId) => {
    props.navigation.navigate('modal', { screen: 'genre', data: getDataById(genresData, 'genre_id', genreId) })
  }

  return (
    <>
      <ListItems data={getData(genresData)} layout="listItemNoImage" />
    </>
  )
}

export default GenresManager;