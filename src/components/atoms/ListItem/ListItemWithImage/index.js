import React from 'react'
import { View, Image } from 'react-native'
import { moleculesStyles as styles } from 'assets/styles';
import { appConfig } from 'configs';

const ListItemWithImage = (props) => {
  const image = { uri: appConfig.url.assets + '/' + props.image }
  return (
    <>
      <View style={styles.listItem} >
        <Image source={image} style={styles.listItemImage} resizeMethod="resize" />
        <View style={styles.itemInfo}>
          {props.info}
        </View>
      </View>
    </>
  )
}
export default ListItemWithImage;