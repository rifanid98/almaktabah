import React from 'react'
import { Image, Text, View } from 'react-native'
import { font, colorScheme as color } from 'assets/styles'

const Empty = () => {
  return (
    <>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.primary
      }}>
        <Image source={require('assets/images/empty.png')} resizeMethod="resize"/>
        <Text style={{
          marginTop: 10,
          fontFamily: font.title,
          fontSize: 40
        }}>Book not found</Text>
        <Text style={{
          marginTop: 10,
          fontFamily: font.title,
          fontSize: 23
        }}>Try titles, genres & other authors</Text>
      </View>
    </>
  )
}

export default Empty;