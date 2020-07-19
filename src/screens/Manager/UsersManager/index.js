import React from 'react'
import { View, Text } from 'react-native'
import { ListItems } from 'components'
import { managerStyles as manager, moleculesStyles as molecules } from 'assets/styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { getDataById } from 'utils'

const UsersManager = (props) => {
  const usersData = [
    {
      user_id: 1,
      name: 'User 1',
      full_name: 'User Panjang',
      email: 'email@user.com',
      image: 'image url',
      role: 1
    },
    {
      user_id: 2,
      name: 'User 2',
      full_name: 'User Panjang',
      email: 'email@user.com',
      image: 'image url',
      role: 2
    },
    {
      user_id: 3,
      name: 'User 3',
      full_name: 'User Panjang',
      email: 'email@user.com',
      image: 'image url',
      role: 3
    },
    {
      user_id: 4,
      name: 'User 4',
      full_name: 'User Panjang',
      email: 'email@user.com',
      image: 'image url',
      role: 3
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
        <Text style={molecules.listItemBodyNoImage}>{getRole(item.role)}</Text>
        <View style={molecules.listItemActionNoImage}>
          <Text
            style={[molecules.listItemEditNoImage, molecules.listItemActionItemNoImage]}
            onPress={() => showModal(item.user_id)}
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

  const getRole = (role) => {
    switch (role) {
      case 1:
        return 'Admin'

      case 2:
        return 'Staff'

      case 3:
        return 'User'

      default:
        return 'Undefined'
        break;
    }
  }

  const showModal = (userId) => {
    props.navigation.navigate('modal', { screen: 'user', data: getDataById(usersData, 'user_id', userId) })
  }

  return (
    <>
      <ListItems data={getData(usersData)} layout="listItemNoImage" />
    </>
  )
}

export default UsersManager;