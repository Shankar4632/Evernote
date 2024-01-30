import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";

const Addinput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <View style={styles.sub1}>
          <Feather name="check" size={25} color={"#1b9335"} />
          <Ionicons name="return-up-back" size={20} color={"white"} />
          <Ionicons name="return-up-forward" size={20} color={"white"} />
        </View>
        <View style={styles.sub2}>
          <Octicons name="person-add" size={25} color={"white"} />
          <Ionicons name="return-up-back" size={20} color={"white"} />
          <Ionicons name="return-up-forward" size={20} color={"white"} />
        </View>
      </View>
    </View>
  );
};

export default Addinput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    flex: 1,
  },
  section1: {
    padding: 30,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sub1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  sub2: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
});
