import { StyleSheet} from 'react-native'
import colorScheme from './colorScheme';

const input = StyleSheet.create({
  inputAuth: {
    borderWidth: 1,
    borderTopColor: 'white',
    borderBottomColor: colorScheme.accent,
    borderRightColor: 'white',
    borderLeftColor: 'white',
    margin: 10
  },
});

module.exports = input;