import React from 'react'
import { View, ImageBackground } from 'react-native'
import { moleculesStyles as styles } from 'assets/styles';

const ListItemWithImage = (props) => {
  const image = { uri: props.image }
  return (
    <>
      <View style={styles.listItem} >
        <ImageBackground source={image} style={styles.listItemImage}></ImageBackground>
        <View style={styles.itemInfo}>
          {props.info}
        </View>
      </View>
    </>
  )
}
export default ListItemWithImage;