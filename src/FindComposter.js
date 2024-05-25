import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

const FindComposter = ({ navigation }) => {
  const navigateToScreen = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ImageBackground source={require("./assets/fc/fc.png")} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Find a Composter Near You</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigateToScreen("Map")}>
          <Text style={styles.buttonText}>Farm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigateToScreen("Map")}>
          <Text style={styles.buttonText}>Community Garden</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigateToScreen("Map")}>
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
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default FindComposter;