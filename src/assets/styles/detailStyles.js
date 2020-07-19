import { StyleSheet } from 'react-native'
import { font } from './font';
import { colorScheme as color } from './index';

/**
 * Style Variables
 */
const wrapper = {
  flexDirection: 'column',
  marginHorizontal: 20,
  marginBottom: 50,
}
const title = {
  fontFamily: font.title,
  fontSize: 27,
  marginBottom: 10,
}
const items = {
  flex: 1,
  flexDirection: 'row',
}
const dimension = {
  height: 150,
  width: 110,
}
const item = {
  ...dimension,
  marginRight: 10,
  backgroundColor: color.secondary,
  borderWidth: 1,
  borderColor: color.accent,
  overflow: 'hidden'
}
/**
 * Main Styles
 */
const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  header: {
    marginTop: 45,
    marginBottom: 30,
    flexDirection: 'row',
  },
  a: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  b: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  c: {
    // flex: 1
  },
  headerTitle: {
    fontFamily: font.title,
    color: color.font.primary,
    fontSize:40,
  },
  clearButton: {
    margin: 10,
    color: color.primary,
    
  },
  clearButtonContainer: {
    borderColor: color.primary
  },
  backButtonContainer: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: color.accent,
    color: color.accent,
    backgroundColor: color.primary,
  },

  // content
  content: {
    alignItems: 'center'
  },
  bookImage: {
    height: 300,
    width: 220
  },
  title: {
    fontFamily: font.heading,
    fontSize: 25,
    color: color.font.primary,
    width: 350,
    textAlign: 'center',
    marginTop: 20,
  },
  author: {
    fontFamily: font.body,
    fontSize: 23,
    color: color.font.secondary,
    marginBottom: 20
  },
  description: {
    fontFamily: font.body,
    fontSize: 22,
    textAlign: 'justify',
    // height: 250,
    overflow: 'scroll'
  },
  button: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: color.accent,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
  },
  buttonText: {
    flex: 1,
    color: color.primary,
    fontFamily: font.heading,
    fontSize: 20,
    textAlign: 'center',
  }
})

export default detailStyles;