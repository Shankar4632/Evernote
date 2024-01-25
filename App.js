import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Homepage from "./screens/Homepage";

export default function App() {
  return (
    <View style={styles.container}>
      <Homepage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
