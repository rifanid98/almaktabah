import React from 'react'
import { Image, Text, View } from 'react-native'
import { font, colorScheme as color } from 'assets/styles'

const Search = () => {
  return (
    <>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.primary
      }}>
        <Image source={require('assets/images/search.png')} resizeMethod="resize" />
        <Text style={{
          marginTop: 10,
          fontFamily: font.title,
          fontSize: 40
        }}>Search your book.</Text>
        <Text style={{
          marginTop: 10,
          fontFamily: font.title,
          fontSize: 23
        }}>Try titles, genres & authors</Text>
      </View>
    </>
  )
}

export default Search;