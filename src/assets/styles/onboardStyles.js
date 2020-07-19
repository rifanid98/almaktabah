import { StyleSheet } from 'react-native'
import { font } from './font';
import {colorScheme as color} from './index';

const onboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary
  },
  hero: {
    // flex: 1,
    height: 365,
    marginTop: 45,
    marginBottom: 10,
    // backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 1.5,
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    fontFamily: font.title,
    fontSize: 50,
    color: color.font.primary,
    marginBottom: 10
  },
  subTitle: {
    fontFamily: font.bodyBold,
    fontSize: 23,
    color: color.font.primary,
    textAlign: 'center',
  },
  indicator: {
    margin: 50,
    width: 80,
    height: 7,
    // backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dotIndicator: {
    height: 11,
    width: 11,
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 1
  },
  activeIndicator: {
    backgroundColor: color.accent
  },
  inActiveIndicator: {
    borderColor: color.accent,
    backgroundColor: color.secondary
  },
  reader: {
    fontFamily: font.bodyBold,
    fontSize: 23,
    color: color.font.primary,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 80
  },
  a: {
    flex: 1
  },
  b: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  c: {
    flex: 1,
    alignSelf: "center",
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer: {
    padding: 20,
    borderRadius: 50,
    backgroundColor: color.accent
  },
  skip: {
    fontFamily: font.titleRegular,
    fontSize: 17,
    textAlign: "right",
    color: color.font.secondary,
  }
})

export default onboardStyles;