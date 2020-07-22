import React, { useState } from 'react'
import { View, Text } from 'react-native'
import {
  ScreenHeader,
  BookEditModalBody,
  GenreEditModalBody,
  AuthorEditModalBody,
  UserEditModalBody,
  BookAddModalBody,
  AuthorAddModalBody,
  GenreAddModalBody,
  UserAddModalBody
} from 'components'
import { modalStyles as styles } from 'assets/styles'

const Modal = (props) => {
  const data = props.route.params.data
  console.log(data, 'modal');
  const screen = props.route.params.screen
  const type = props.route.params.type

  const showBody = (getScreen, getType, data) => {
    switch (getType) {
      case 'add':
        switch (getScreen) {
          case 'book': return <BookAddModalBody data={data} />
          case 'genre': return <GenreAddModalBody data={data} />
          case 'author': return <AuthorAddModalBody data={data} />
          case 'user': return <UserAddModalBody data={data} />
        }
      case 'edit':
        switch (getScreen) {
          case 'book': return <BookEditModalBody data={data} />
          case 'genre': return <GenreEditModalBody data={data} />
          case 'author': return <AuthorEditModalBody data={data} />
          case 'user': return <UserEditModalBody data={data} />
        }
    
      default:
        break;
    }
  }
  return (
    <>
      <View style={styles.container}>
        <ScreenHeader navigation={props.navigation} title={type === 'edit' ? 'Edit Data' : 'Add Data'} />
        {showBody(screen, type, data)}
      </View>
    </>
  )
}

export default Modal;