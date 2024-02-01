import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Home from "../../assets/Home.png";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import { dataRef, storage } from "../../firebaseConfig";
import { FlatList } from "react-native-gesture-handler";

const Homepage = ({ navigation }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = dataRef.ref("Tasks").on("value", (snapshot) => {
      const fetchedData = snapshot.val();
      console.log("Fetched Data:", fetchedData); // Log fetched data
      if (fetchedData) {
        const dataArr = Object.keys(fetchedData).map((key) => ({
          id: key,
          ...fetchedData[key],
        }));
        setItems(dataArr);
      } else {
        setItems([]);
      }
    });

    return () => dataRef.ref("Tasks").off("value", fetchData);
  }, []);

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("Detail", { itemId: item.id })}
    >
      <View style={styles.item}>
        <Text style={styles.title}>{index}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.title}>{item.desc}</Text>
      </View>
    </TouchableOpacity>
  );

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
      <View style={styles.maincontainer}>
        <View style={styles.section1}>
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
                onPress={() => navigation.navigate("Addinput")}
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
              <Text style={{ color: "#999999", fontSize: 20 }}>Suggested</Text>
            </View>
          </View>
          <View style={styles.containercolumn}>
            <ScrollView horizontal>
              {items.map((item, index) => (
                <View key={item.id} style={styles.column}>
                  <Text style={styles.notesTitle}>{index}</Text>
                  <Text style={styles.notesTitle}>{item.title}</Text>
                  <Text style={styles.notesTitle}>{item.desc}</Text>
                  <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <Text style={styles.notesFooter}>4 min ago</Text>
                  </View>
                </View>
              ))}
              <View style={styles.column}>
                <View style={styles.icon3}>
                  <MaterialCommunityIcons
                    name="playlist-plus"
                    size={40}
                    style={{
                      backgroundColor: "#00a92c",
                      color: "#1a1a1a",
                      borderRadius: 30,
                      padding: 10,
                    }}
                  />
                  <Text
                    style={{
                      color: "white",
                      fontSize: 17,
                      width: "60%",
                      textAlign: "center",
                      paddingTop: 10,
                    }}
                  >
                    Create new note
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.section2}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 17,
                padding: 15,
                fontWeight: "bold",
              }}
            >
              SCRATCH PAD
            </Text>
            <Entypo
              name="dots-three-horizontal"
              size={20}
              color={"white"}
              style={{
                marginRight: 20,
              }}
            />
          </View>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={30}
            placeholder="Start Writing..."
            placeholderTextColor="#ffffff"
            style={{
              padding: 10,
              backgroundColor: "#24251d",
              borderRadius: 10,
              width: "90%",
              alignSelf: "center",
              marginBottom: 20,
              textAlignVertical: "top", // Align text to the top vertically
              textAlign: "left",
            }}
          />
        </View>
        <View style={styles.section3}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 17,
                padding: 15,
                fontWeight: "bold",
              }}
            >
              RECENTLEY ADDED
            </Text>
            <Entypo
              name="dots-three-horizontal"
              size={20}
              color={"white"}
              style={{
                marginRight: 20,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
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
  maincontainer: {
    backgroundColor: "#262626",
    height: "100%",
  },
  section1: {
    backgroundColor: "black",
    height: "auto",
  },
  section2: {
    marginTop: 20,
    height: "auto",
    backgroundColor: "black",
  },
  section3: {
    marginTop: 20,
    height: "100%",
    backgroundColor: "black",
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
    height: 230,
    marginTop: 20,
    width: "auto",
    marginBottom: 20,
  },
  column: {
    flex: 1,
    marginLeft: 20,
    borderRadius: 20,
    backgroundColor: "#1a1a1a",
  },
  notesTitle: {
    color: "white",
    fontSize: 17,
    padding: 10,
    marginTop: 10,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  notesFooter: {
    color: "#999999",
    fontSize: 12,
    padding: 17,
  },
  icon3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
