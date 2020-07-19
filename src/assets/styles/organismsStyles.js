import { StyleSheet } from 'react-native'
import { font } from './font';
import { colorScheme as color } from './index';

/**
 * Style Variables
 */
const dimension = {
  // height: 150,
  // width: 120,

  height: 190,
  width: 138,
}

const textInfo = {
  fontFamily: font.body,
  fontSize: 20
}

/**
 * Main Styles
 */
const organismsStyles = StyleSheet.create({
  // List Items
  gridItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  listItems: {
    flexDirection: 'column'
  },

})

export default organismsStyles;