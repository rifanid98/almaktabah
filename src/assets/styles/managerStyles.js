import { StyleSheet } from 'react-native'
import { font } from './font';
import { colorScheme as color } from './index';

/**
 * Style Variables
 */

/**
 * Main Styles
 */

const managerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  categories: {
    flexDirection: 'row'
  },
  categoryText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    textAlign: 'center',
    fontFamily: font.heading,
    fontSize: 20,
    paddingVertical: 10,
    marginHorizontal: 5
  },
  formImage: {
    height: 210,
    width: 130,
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 20,
    justifyContent: 'center'
  },
  image: {
    height: 170,
    width: 130,
    resizeMode: 'cover',
    marginBottom: 10
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: color.accent,
    marginBottom: 20,
    fontFamily: font.body,
    fontSize: 20
  },
  inputWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: color.accent,
    marginBottom: 20,
  },
  label: {
    fontFamily: font.heading,
    fontSize: 20
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    marginBottom: 20,
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
    fontFamily: font.body,
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: color.accent
  },
  button: {
    flex: 1,
    backgroundColor: color.accent,
    textAlign: 'center',
    paddingVertical: 20,
    fontFamily: font.heading,
    fontSize: 20,
    color: color.primary
    // marginBottom: 20
  }
})

export default managerStyles;