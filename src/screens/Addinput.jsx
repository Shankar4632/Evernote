import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { TextInput } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAreaChart } from "@fortawesome/free-solid-svg-icons/faAreaChart";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { dataRef, storage } from "../../firebaseConfig";

const Addinput = ({ navigation }) => {
  const [data, setData] = useState({
    title: "",
    desc: "",
  });
  const [editItemId, setEditItemId] = useState(null);

  const handleSubmitAll = () => {
    if (!data.title) {
      Alert.alert("Error", "Please enter a task ");
      return;
    }

    // Add the new task
    dataRef
      .ref("Tasks")
      .push(data)
      .then(() => {
        Alert.alert("Success", "Task added successfully");
        setData({ title: "", desc: "" }); // Reset data
        navigation.navigate("Homepage");
      })
      .catch((err) => {
        Alert.alert("Error", err.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <View style={styles.sub1}>
          <TouchableOpacity onPress={handleSubmitAll}>
            <Feather name="check" size={25} color={"#1b9335"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="return-up-back" size={20} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="return-up-forward" size={20} color={"white"} />
          </TouchableOpacity>
        </View>

        <View style={styles.sub2}>
          <Octicons name="person-add" size={20} color={"white"} />
          <MaterialCommunityIcons name="home-plus" size={20} color={"white"} />
          <Entypo
            name="dots-three-horizontal"
            size={20}
            color={"white"}
            style={styles.threedots}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          color: "white",
          alignItems: "center",
          paddingLeft: 30,
        }}
      >
        <Text
          style={{
            color: "#b2b2b2",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons
            name="notebook-plus"
            size={25}
            color={"#b2b2b2"}
            paddingRight={10}
          />{" "}
          {/* <FontAwesomeIcon icon={faTag} color={"#b2b2b2"} size={25} /> */}
          First Notebook
        </Text>
      </View>
      <View>
        <TextInput
          style={{
            borderColor: "#262626",
            borderWidth: 1,
            marginTop: 20,
            padding: 20,
            fontSize: 25,
            paddingLeft: 35,
            color: "white",
          }}
          placeholder="Title"
          placeholderTextColor="#b2b2b2"
          underlineColorAndroid="transparent"
          value={data.title}
          onChangeText={(text) => setData({ ...data, title: text })}
        />
        <TextInput
          editable
          multiline
          numberOfLines={10}
          maxLength={40}
          value={data.desc}
          onChangeText={(text) => setData({ ...data, desc: text })}
          style={{
            paddingLeft: 35,
            borderColor: "#262626",
            color: "white",
            borderWidth: 1,
            textAlignVertical: "top",
            paddingTop: 20,
          }}
        />
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
