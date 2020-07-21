import { StyleSheet } from 'react-native'
import { font } from './font';
import { colorScheme as color, colors } from './index';


/**
 * Style Variables
 */

/**
 * Main Styles
 */

const atomStyles = StyleSheet.create({
  fixedAddButtonWrapper: {
    position: 'absolute',
    right: '5%',
    bottom: '5%',
    borderRadius: 50,
    backgroundColor: color.accent,
    padding: 20
  },
  fixedAddButton: {
    color: color.primary
  }
})

export default atomStyles;