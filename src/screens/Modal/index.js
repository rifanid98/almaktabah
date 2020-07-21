import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { ScreenHeader, BookEditModalBody, GenreEditModalBody, AuthorEditModalBody, UserEditModalBody } from 'components'
import { modalStyles as styles } from 'assets/styles'

const Modal = (props) => {
  const data = props.route.params.data
  const screen = props.route.params.screen

  const showBody = (getScreen, data) => {
    switch (getScreen) {
      
      case 'book':
        return <BookEditModalBody data={data} />

      case 'genre':
        return <GenreEditModalBody data={data} />
        
      case 'author':
        return <AuthorEditModalBody data={data} />
        
      case 'user':
        return <UserEditModalBody data={data} />
        
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