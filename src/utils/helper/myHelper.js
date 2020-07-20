const { Alert } = require("react-native");

export const alert = (title, message) => {
  Alert.alert(
    title,
    message,
    [{ text: "Close", onPress: () => console.log("Cancel Pressed") },
    { text: "OK", onPress: () => console.log("OK Pressed") }],
    { cancelable: false }
  );
}