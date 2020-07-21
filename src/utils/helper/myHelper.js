const { Alert } = require("react-native");

export const alert = (title, message) => {
  Alert.alert(
    title,
    message,
    [{ text: "Close", onPress: () => console.log('Close Pressed') },
      { text: "OK", onPress: () => console.log('Ok Pressed') }],
    { cancelable: false }
  );
}

export const getRole = (role) => {
  switch (role) {
    case 1:
      return 'Admin'

    case 2:
      return 'Staff'

    case 3:
      return 'User'

    default:
      return 'Undefined'
      break;
  }
}