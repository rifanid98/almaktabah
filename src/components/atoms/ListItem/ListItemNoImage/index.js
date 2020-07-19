import React from 'react'
import { View } from 'react-native'
import { moleculesStyles as styles } from 'assets/styles';

const ListItemNoImage = (props) => {
  const image = { uri: props.image }
  return (
    <>
      <View style={styles.listItemNoImage} >
        {props.info}
      </View>
    </>
  )
}
export default ListItemNoImage;