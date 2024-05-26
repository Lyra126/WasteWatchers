import React, { useRef, useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ImageBackground, Platform, Keyboard, Modal } from "react-native";
import { GestureHandlerRootView, Gesture, GestureDetector} from "react-native-gesture-handler";

  //apples
  const apple1 = require('./assets/fruitTrees/apple1.png');
  const apple2 = require('./assets/fruitTrees/apple2.png');
  const apple3 = require('./assets/fruitTrees/apple3.png');
  const apple4 = require('./assets/fruitTrees/apple4.png');
  const apple5 = require('./assets/fruitTrees/apple5.png');
  //peaches
  const peach1 = require('./assets/fruitTrees/peach1.png');
  const peach2 = require('./assets/fruitTrees/peach2.png');
  const peach3 = require('./assets/fruitTrees/peach3.png');
  const peach4 = require('./assets/fruitTrees/peach4.png');
  const peach5 = require('./assets/fruitTrees/peach5.png');
  //oranges
  const orange1 = require('./assets/fruitTrees/orange1.png');
  const orange2 = require('./assets/fruitTrees/orange2.png');
  const orange3 = require('./assets/fruitTrees/orange3.png');
  const orange4 = require('./assets/fruitTrees/orange4.png');
  const orange5 = require('./assets/fruitTrees/orange5.png');
  //mangos
  const mango1 = require('./assets/fruitTrees/mango1.png');
  const mango2 = require('./assets/fruitTrees/mango2.png');
  const mango3 = require('./assets/fruitTrees/mango3.png');
  const mango4 = require('./assets/fruitTrees/mango4.png');
  const mango5 = require('./assets/fruitTrees/mango5.png');
  //bananas
  const banana1 = require('./assets/fruitTrees/banana1.png');
  const banana2 = require('./assets/fruitTrees/banana2.png');
  const banana3 = require('./assets/fruitTrees/banana3.png');
  const banana4 = require('./assets/fruitTrees/banana4.png');
  const banana5 = require('./assets/fruitTrees/banana5.png');


const Home = ({ navigation }) => {
  const [points, setPoints] = useState(90);
  const [treesGrown, setTreesGrown] = useState(0); 
  const [compostSaved, setCompostSaved] = useState(0);
  const [fruitTree, setFruitTree] = useState("apple");
  const [showStatisticsPopup, setShowStatisticsPopup] = useState(false);

  const toggleStatisticsPopup = () => {
    setShowStatisticsPopup(!showStatisticsPopup);
  };

  const navigateToScreen = (screen) => {
    navigation.navigate(screen);
  };

  // Update background image based on points
  const getBackgroundImage = () => {
    const stage = Math.floor(points / 20) % 5 + 1;
    let image;

    switch (fruitTree) {
      case "apple":
        switch (stage) {
          case 1: image = apple1; break;
          case 2: image = apple2; break;
          case 3: image = apple3; break;
          case 4: image = apple4; break;
          case 5: image = apple5; break;
          default: image = apple1; break;
        }
        break;
      case "peach":
        switch (stage) {
          case 1: image = peach1; break;
          case 2: image = peach2; break;
          case 3: image = peach3; break;
          case 4: image = peach4; break;
          case 5: image = peach5; break;
          default: image = peach1; break;
        }
        break;
      case "mango":
        switch (stage) {
          case 1: image = mango1; break;
          case 2: image = mango2; break;
          case 3: image = mango3; break;
          case 4: image = mango4; break;
          case 5: image = mango5; break;
          default: image = mango1; break;
        }
        break;
      case "banana":
        switch (stage) {
          case 1: image = banana1; break;
          case 2: image = banana2; break;
          case 3: image = banana3; break;
          case 4: image = banana4; break;
          case 5: image = banana5; break;
          default: image = banana1; break;
        }
        break;
      case "orange":
        switch (stage) {
          case 1: image = orange1; break;
          case 2: image = orange2; break;
          case 3: image = orange3; break;
          case 4: image = orange4; break;
          case 5: image = orange5; break;
          default: image = orange1; break;
        }
        break;
      default:
        image = apple1; // Default to apple
    }

    return image;
  };    

  

  return (
    <ImageBackground source={getBackgroundImage()} style={styles.container}>
      <View style = {styles.topButtonsContainer}>
        {/*Show Statistics*/}
        <TouchableOpacity style={styles.homeButton} onPress={toggleStatisticsPopup}>
          <Text style={styles.buttonText}>Statistics</Text>
        </TouchableOpacity>

        <Modal animationType="slide" transparent={true} visible={showStatisticsPopup} onRequestClose={toggleStatisticsPopup}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.statistics}>Total Points: {points}</Text>
              <Text style={styles.statistics}>Trees Grown: {treesGrown}</Text>
              <Text style={styles.statistics}>Compost Saved: {compostSaved}</Text>
              <TouchableOpacity onPress={toggleStatisticsPopup}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>


        <TouchableOpacity style={styles.homeButton} onPress={() => navigateToScreen("FindComposter")}>
          <Text style={styles.buttonText}>Find Composter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeButton} onPress={() => navigateToScreen("Scanner")}>
          <Text style={styles.buttonText}>Scan</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  topButtonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    paddingTop: Platform.OS === 'ios' ? 40 : 20, // Adjust for status bar height
  },
  homeButton: {
    backgroundColor: "#26a69a",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },
  closeButton: {
    marginTop: 10,
    color: "blue",
  }
});

export default Home;
