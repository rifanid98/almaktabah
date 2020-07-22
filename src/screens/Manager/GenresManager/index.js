import React, { useEffect } from 'react'
import { View, Text, Alert } from 'react-native'
import { ListItems, FixedAddButton } from 'components'
import { managerStyles as manager, moleculesStyles as molecules } from 'assets/styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { getDataById, createUrlParamFromObj, alert } from 'utils'
import { connect } from 'react-redux'
import { getGenres, deleteGenre } from 'modules'

const GenresManager = (props) => {
  useEffect(() => {
    getGenres()
  }, [])
  
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
          <Text
            style={[molecules.listItemDeleteNoImage, molecules.listItemActionItemNoImage]}
            onPress={() => deleteGenre(item.genre_id)}
          >
            <FontAwesomeIcon style={molecules.listItemActionIconNoImage} icon={faTrashAlt} />
            Delete
          </Text>
        </View>
      </>
    )
  }

  const showModal = (genreId) => {
    props.navigation.navigate('modal', { screen: 'genre', type: 'edit', data: getDataById(props.genres.data, 'genre_id', genreId) })
  }

  const getGenres = () => {
    const pagination = {
      page: 1,
      limit: 10
    }
    const params = createUrlParamFromObj(pagination);
    const token = props.auth.data.tokenLogin;
    token
      ? props.getGenres(token, params)
        .then((res) => {

        }).catch((error) => {
          console.log(`get genres failed`)
        })
      : alert('Token Failed', 'Cannot find token...')
  }
  const deleteGenre = (genreId) => {
    const token = props.auth.data.tokenLogin;
    Alert.alert(
      "Delete this genre ?",
      "This action cannot be undone!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            props.deleteGenre(token, genreId)
              .then((res) => {
                if (res.value.status === 200) {
                  alert('Success', 'Genre deleted successfully')
                  getGenres()
                }
              })
              .catch((error) => {
                console.log(error);
                error.response.data.message
                  ? alert('Failed', error.response.data.message)
                  : alert('Failed', 'Delete Genre Failed. Please try again later')
              }) 
        } }
      ],
      { cancelable: false }
    );
  }
  return (
    <>
      <View style={{ flex: 1, paddingTop: 10, backgroundColor: 'white'}}>
        <ListItems data={getData(props.genres.data)} layout="listItemNoImage" />
        <FixedAddButton />
      </View>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  genres: state.genres
})

const mapDispatchToProps = {
  getGenres,
  deleteGenre
}

export default connect(mapStateToProps, mapDispatchToProps)(GenresManager);