import { StyleSheet } from 'react-native'
import { font } from './font';
import { colorScheme as color } from './index';

/**
 * Style Variables
 */

/**
 * Main Styles
 */
const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: color.primary,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 50
  },
  profileImage: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
    borderRadius: 75
  },
  profileInfo: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center'
  },
  name: {
    fontFamily: font.heading,
    fontSize: 20
  },
  email: {
    fontSize: 22,
    fontFamily: font.body
  },
  role: {
    fontSize: 22,
    fontFamily: font.body
  },
  edit: {
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  text: {
    flex: 1,
    textAlign: 'right',
    fontFamily: font.heading,
    fontSize: 22,
    textDecorationLine: "underline"
  },

  // content
  content: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    paddingHorizontal: 20,
    marginVertical: 20
  },
  formControl: {
    marginBottom: 20
  },
  input: {
    borderWidth: 3,
    borderBottomColor: color.accent,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 20,
    marginLeft: 0,
    fontFamily: font.body,
    fontSize: 20
  },
  label: {
    fontFamily: font.heading,
    fontSize: 20
  },
  forget: {
    flexDirection: 'row',
    marginTop: -25
  },
  forgetText: {
    flex: 1,
    textAlign: 'right',
    fontFamily: font.heading,
    fontSize: 16,
  },
  buttonWrapper: {
    // flex: 1,
    height: 60,
    backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  button: {
    height: '100%',
    paddingVertical: 19,
    width: '100%',
    textAlign: 'center',
    fontFamily: font.heading,
    fontSize: 20,
    color: color.primary,
    backgroundColor: color.accent
  }
})

export default profileStyles;