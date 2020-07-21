import React from 'react'
import { Image, Text, View } from 'react-native'
import { font, colorScheme as color } from 'assets/styles'

const NotFound = () => {
  return (
    <>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.primary
      }}>
        <Image source={require('assets/images/not_found.png')} />
        <Text style={{
          marginTop: 10,
          fontFamily: font.title,
          fontSize: 65
        }}>404</Text>
        <Text style={{
          marginTop: 10,
          fontFamily: font.title,
          fontSize: 23
        }}>Not Found</Text>
      </View>
    </>
  )
}

export default NotFound;