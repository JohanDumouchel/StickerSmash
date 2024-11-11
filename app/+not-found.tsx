import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: 'Oopsy... Not found'}}/>
      <Link href={"/"} style={styles.button}> Go back to Home screen</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 20,
    textDecorationLine:'underline',
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
});