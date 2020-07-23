import React from 'react'
import { Image, Text, View } from 'react-native'
import { font, colorScheme as color } from 'assets/styles'

const Loading = () => {
  return (
    <>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.primary
      }}>
        <Image source={require('assets/images/loading.png')} resizeMethod="resize" />
        <Text style={{
          marginTop: 10,
          fontFamily: font.title,
          fontSize: 40
        }}>Loading...</Text>
        <Text style={{
          marginTop: 10,
          fontFamily: font.title,
          fontSize: 23
        }}>Please Wait</Text>
      </View>
    </>
  )
}

export default Loading;