import React, { useEffect } from 'react'
import { View, Text, Alert } from 'react-native'
import { ListItems, FixedAddButton } from 'components'
import { managerStyles as manager, moleculesStyles as molecules } from 'assets/styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { getDataById, createUrlParamFromObj, getRole } from 'utils'
import { connect } from 'react-redux'
import { getUsers, deleteUser } from 'modules'

const UsersManager = (props) => {
  useEffect(() => {
    getUsers()
  }, [])
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
        <Text style={molecules.listItemBody}>{item.username}</Text>
        <Text style={molecules.listItemBody}>{getRole(item.role)}</Text>
        <View style={molecules.listItemAction}>
          <Text
            style={[molecules.listItemEdit, molecules.listItemActionItem]}
            onPress={() => showModal(item.user_id)}
          >
            <FontAwesomeIcon style={molecules.listItemActionIcon} icon={faEdit} />
            Edit
          </Text>
          <Text
            style={[molecules.listItemDelete, molecules.listItemActionItem]}
            onPress={() => deleteUser(item.user_id)}
          >
            <FontAwesomeIcon style={molecules.listItemActionIcon} icon={faTrashAlt} />
            Delete
          </Text>
        </View>
      </>
    )
  }

  const showModal = (userId) => {
    props.navigation.navigate('modal', { screen: 'user', data: getDataById(props.users.data, 'user_id', userId) })
  }

  const getUsers = () => {
    const pagination = {
      page: 1,
      limit: 10
    }
    const params = createUrlParamFromObj(pagination);
    const token = props.auth.data.tokenLogin;
    token
      ? props.getUsers(token, params)
        .then((res) => {

        }).catch((error) => {
          console.log(`get users failed`)
        })
      : alert('Token Failed', 'Cannot find token...')
  }
  const deleteUser = (userId) => {
    const token = props.auth.data.tokenLogin;
    Alert.alert(
      "Delete this user ?",
      "This action cannot be undone!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            props.deleteUser(token, userId)
              .then((res) => {
                if (res.value.status === 200) {
                  alert('Success', 'User deleted successfully')
                  getUsers()
                }
              })
              .catch((error) => {
                console.log(error);
                error.response.data.message
                  ? alert('Failed', error.response.data.message)
                  : alert('Failed', 'Delete user failed. Please try again later')
              })
          }
        }
      ],
      { cancelable: false }
    );
  }
  return (
    <>
      <View style={{ flex: 1, paddingTop: 10, backgroundColor: 'white' }}>
        <ListItems data={getData(props.users.data)} layout="listItemWithImage" />
        <FixedAddButton />
      </View>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users
})

const mapDispatchToProps = {
  getUsers,
  deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersManager);