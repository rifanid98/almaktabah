import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { ScreenHeader, BookModalBody, GenreModalBody, AuthorModalBody, UserModalBody } from 'components'
import { modalStyles as styles } from 'assets/styles'

const Modal = (props) => {
  const data = props.route.params.data
  const screen = props.route.params.screen

  const showBody = (getScreen, data) => {
    console.log(getScreen)
    switch (getScreen) {
      
      case 'book':
        return <BookModalBody data={data} />

      case 'genre':
        return <GenreModalBody data={data} />
        
      case 'author':
        return <AuthorModalBody data={data} />
        
      case 'user':
        return <UserModalBody data={data} />
        
        break;
    
      default:
        break;
    }
  }
  return (
    <>
      <View style={styles.container}>
        <ScreenHeader navigation={props.navigation} title="Edit" />
        {showBody(screen, data)}
      </View>
    </>
  )
}

export default Modal;