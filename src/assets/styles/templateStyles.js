import { StyleSheet } from 'react-native'
import { font } from './font';
import { colorScheme as color } from './index';

/**
 * Style Variables
 */

/**
 * Main Styles
 */

const templateStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
})

export default templateStyles;