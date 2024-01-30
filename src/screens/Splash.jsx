// screens/Splash.js
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Homepage from "./Homepage";
import Entypo from "react-native-vector-icons/Entypo";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Homepage");
    }, 4000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
      <View>
        <Entypo name="evernote" size={70} color={"green"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
});

export default Splash;
