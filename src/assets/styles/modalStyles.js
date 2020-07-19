import { StyleSheet } from 'react-native'
import { font } from './font';
import { colorScheme as color } from './index';

/**
 * Style Variables
 */

/**
 * Main Styles
 */

const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
})

export default modalStyles;