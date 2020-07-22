import React from 'react'
import { Image, Text, View } from 'react-native'
import { font, colorScheme as color } from 'assets/styles'

const Success = () => {
  return (
    <>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.primary
      }}>
        <Image source={require('assets/images/success.png')} />
        <Text style={{
          marginTop: 10,
          fontFamily: font.title,
          fontSize: 50
        }}>Success</Text>
        <Text style={{
          marginTop: 10,
          fontFamily: font.title,
          fontSize: 23
        }}>Congratulations !</Text>
      </View>
    </>
  )
}

export default Success;