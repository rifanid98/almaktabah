import React, { useEffect } from 'react'
import { View, Text, Alert } from 'react-native'
import { ListItems, FixedAddButton } from 'components'
import { managerStyles as manager, moleculesStyles as molecules, colors as color} from 'assets/styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { getDataById, createUrlParamFromObj } from 'utils'
import { connect } from 'react-redux'
import { getAuthors, deleteAuthor } from 'modules'

const AuthorsManager = (props) => {
  useEffect(() => {
    getAuthors()
  }, [])
  
  const getData = (datas) => {
    if (!datas) return [];
    if (Object.keys(datas).length < 1) return [];
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
            onPress={() => showEditModal(item.author_id)}
          >
            <FontAwesomeIcon style={molecules.listItemActionIconNoImage} icon={faEdit} />
            Edit
          </Text>
          <Text
            style={[molecules.listItemDeleteNoImage, molecules.listItemActionItemNoImage]}
            onPress={() => deleteAuthor(item.author_id)}
          >
            <FontAwesomeIcon style={molecules.listItemActionIconNoImage} icon={faTrashAlt} />
            Delete
          </Text>
        </View>
      </>
    )
  }

  const showEditModal = (authorId) => {
    props.navigation.navigate('modal', { screen: 'author', type: 'edit', data: getDataById(props.authors.data, 'author_id', authorId) })
  }
  const showAddModal = () => {
    props.navigation.navigate('modal', { screen: 'author', type: 'add' })
  }


  const getAuthors = () => {
    const pagination = {
      page: 1,
      limit: 10
    }
    const params = createUrlParamFromObj(pagination);
    const token = props.auth.data.tokenLogin;
    token
      ? props.getAuthors(token, params)
        .then((res) => {

        }).catch((error) => {
          console.log(`get authors failed`)
        })
      : alert('Token Failed', 'Cannot find token...')
  }
  const deleteAuthor = (authorId) => {
    const token = props.auth.data.tokenLogin;
    Alert.alert(
      "Delete this author ?",
      "This action cannot be undone!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            props.deleteAuthor(token, authorId)
              .then((res) => {
                if (res.value.status === 200) {
                  alert('Success', 'Genre deleted successfully')
                  getAuthors()
                }
              })
              .catch((error) => {
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
      <View style={{ flex: 1, paddingTop: 10, backgroundColor: 'white'}}>
        <ListItems data={getData(props.authors.data)} layout="listItemNoImage" />
        <FixedAddButton onPress={() => showAddModal()} />
      </View>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  authors: state.authors
})

const mapDispatchToProps = {
  getAuthors,
  deleteAuthor
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsManager);