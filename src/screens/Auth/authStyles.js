import { StyleSheet} from 'react-native'
import { colorScheme as color, reset, font } from 'assets/styles';

const authStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.primary,
    paddingTop: reset.paddingTop,
    paddingRight: reset.paddingRight,
    paddingBottom: reset.paddingBottom,
    paddingLeft: reset.paddingLeft
  },
  content: {
    marginTop: 85
  },
  header: {
    marginTop: 150,
  },
  headerSignup: {
    marginTop: 50,
  },
  h1: {
    fontFamily: font.title,
    fontSize:48
  },
  small: {
    fontFamily: font.body,
    fontSize:23
  },
  formControl: {
    marginBottom: 30
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
    fontFamily: font.body,
    fontSize: 20
  },
  button: {
    backgroundColor: color.accent,
    color: color.primary,
    fontSize: 20
  },
  buttonContainer: {
    marginTop: 85,
    padding: 20,
    backgroundColor: color.accent
  },

  feedback: {
    flexDirection: 'row',
    marginTop: -20
  },
  feedbackText: {
    flex: 1,
    fontFamily: font.bodyBold,
    fontSize: 18
  },
  feedbackTextRight: {
    textAlign: 'right'
  }
});

module.exports = authStyles;