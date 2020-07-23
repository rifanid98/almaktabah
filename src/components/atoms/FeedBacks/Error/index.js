import React from 'react'
import { Image, Text, View } from 'react-native'
import { font, colorScheme as color } from 'assets/styles'

const Errors = () => {
  return (
    <>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.primary
      }}>
        <Image source={require('assets/images/error.png')} resizeMethod="resize" />
        <Text style={{
          marginTop: 10,
          fontFamily: font.title,
          fontSize: 50
        }}>Oops..</Text>
        <Text style={{
          marginTop: 10,
          fontFamily: font.title,
          fontSize: 23
        }}>Internal Server Error</Text>
        <Text style={{
          marginTop: 10,
          fontFamily: font.bodyBold,
          fontSize: 16
        }}>We will fix it as soon as possible</Text>
      </View>
    </>
  )
}

export default Errors;