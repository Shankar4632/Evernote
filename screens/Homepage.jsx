import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Home from "../assets/Home.png";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";

const Homepage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Home} />

        <MaterialCommunityIcons
          name="lightning-bolt-circle"
          size={30}
          style={styles.icons1}
        />
        <MaterialCommunityIcons
          name="home-edit"
          size={30}
          style={styles.icons2}
        />

        <Text style={styles.text1}>Good Morning ,shankar!</Text>
        <Text style={styles.text2}>WEDNESDAY, 24 JANUARY 2024</Text>
      </View>
      <View style={styles.notesContainer}>
        <Text style={styles.notesText}>
          NOTES <AntDesign name="right" size={20} color={"green"} />
        </Text>
        <View style={styles.iconsContainer}>
          <FontAwesome5
            name="clipboard-list"
            size={25}
            color={"white"}
            style={styles.clipboard}
          />
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
          gap: 20,
          paddingLeft: 20,
          marginTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            paddingLeft: 20,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "green",
              fontSize: 20,
              textDecorationLine: "underline",
            }}
          >
            Recent
          </Text>
          <Text style={{ color: "white", fontSize: 20 }}>Suggested</Text>
        </View>
      </View>
      <View style={styles.containercolumn}>
        <View style={styles.column}>
          <Text style={styles.notesTitle}>Untitled Notes</Text>
          <Text
            style={{
              color: "white",
              borderColor: "red",
              borderWidth: 1,
            }}
          >
            4 min before{" "}
          </Text>
        </View>
        <View style={styles.column}>
          <Text>Untitled Notes</Text>
        </View>
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    color: "white",
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    borderWidth: 2,
  },
  image: {
    width: "100%",
    height: 220,
  },
  text1: {
    position: "absolute",
    bottom: 50,
    left: 20,
    color: "white",
    fontSize: 25,
  },
  text2: {
    position: "absolute",
    bottom: 20,
    left: 20,
    color: "white",
    fontSize: 15,
  },
  icons1: {
    position: "absolute",
    right: 70,
    top: 40,
    color: "#feae06",
  },
  icons2: {
    position: "absolute",
    right: 30,
    top: 40,
    color: "white",
  },
  notesContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingLeft: 20,
    marginTop: 20,
  },
  notesText: {
    color: "white",
    fontSize: 20,
    marginRight: "auto",
  },
  iconsContainer: {
    flexDirection: "row",
    marginRight: 20,
    alignItems: "center",
  },
  clipboard: {
    marginLeft: 40,
  },
  threedots: {
    marginLeft: 30,
  },
  containercolumn: {
    flexDirection: "row",
    height: 250,
    borderColor: "white",
    borderWidth: 1,
    marginTop: 20,
  },
  column: {
    marginLeft: 20,
    borderRadius: 20,
    width: "35%",
    height: "100%",
    backgroundColor: "#1a1a1a",
  },
  notesTitle: {
    color: "white",
    fontSize: 17,
    padding: 10,
    marginTop: 10,
  },
});
