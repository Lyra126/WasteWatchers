import React from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity, ImageBackground } from "react-native";

const FindComposter = ({ navigation }) => {
    const navigateToScreen = (screen, message) => {
        navigation.navigate(screen, { message });
    };
      

    return (
        <ImageBackground source={require("./assets/fc/fc.png")} style={styles.backgroundImage}>
        <View style={styles.topButtonsContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigateToScreen("Home")}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <Text style={styles.title}>Find a Composter Near You</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigateToScreen("Map", "Farms")}>
            <Text style={styles.buttonText}>Farm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigateToScreen("Map", "Community gardens")}>
            <Text style={styles.buttonText}>Community Garden</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigateToScreen("Map", "Farmer markets")}>
            <Text style={styles.buttonText}>Farmer Market</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginBottom: 300
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  button: {
    backgroundColor: "#26a69a",
    padding: 16,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: "center",
  },
  backButton:{
    backgroundColor: "#26a69a",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  topButtonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 40 : 20, // Adjust for status bar height
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  }
});

export default FindComposter;