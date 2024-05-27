import React, { useState, useRef } from "react";
import { View, Text, Dimensions, Modal, StyleSheet, TouchableOpacity, TextInput, Platform, Keyboard } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView, { Marker, PROVIDER_GOOGLE , PROVIDER_DEFAULT} from "react-native-maps";


const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_LAT = 28.46254;
const INITIAL_LNG = -81.397272;
const INITIAL_POSITION = {
latitude: INITIAL_LAT,
longitude: INITIAL_LNG,
latitudeDelta: LATITUDE_DELTA,
longitudeDelta: LONGITUDE_DELTA,
};

const Map = ({ route, navigation }) => {
    const { message } = route.params;
    const [searchText, setSearchText] = useState("");
    const [results, setResults] = useState([]);
    const [showSaveLocationPopup, setShowSaveLocationPopup] = useState(false);
    const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [savedMarkerIndexes, setSavedMarkerIndexes] = useState([]);
    const map = useRef(null);
    const markerRef = useRef(null);
    

    const navigateToScreen = (screen) => {
        navigation.navigate(screen);
    };

    // const saveLocation = () => {
    //     console.log("Saved");
    //     markerRef.current.setNativeProps({ pinColor: "green"});
    //     setShowSaveLocationPopup(false);
    //     //save location to database
    // }

    const saveLocation = () => {
        if (selectedMarkerIndex !== null) {
            console.log("Saved");
            setResults(prevResults => {
                const updatedResults = [...prevResults];
                updatedResults[selectedMarkerIndex] = {
                    ...updatedResults[selectedMarkerIndex],
                    saved: true // You might want to add a flag to indicate it's saved
                };
                savedMarkerIndexes.push(selectedMarkerIndex);

                return updatedResults;
            });
            setShowSaveLocationPopup(false);
            // Save location to database
        }
    };

    const handleMarkerPress = (index) => {
        toggleSaveLocationPopup(index);
    };

    const toggleSaveLocationPopup = (index) => {
        setSelectedMarkerIndex(index);
        setShowSaveLocationPopup(!showSaveLocationPopup);
    };

    const searchPlaces = async () => {
        if (!searchText.trim().length) return;
    
        const googleApisUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json";
        const input = searchText.trim();
        const location = `${INITIAL_LAT},${INITIAL_LNG}`;
        const radius = 2000; // in meters
        const query = `${message} near ${input}`;
        const url = `${googleApisUrl}?query=${query}&location=${location}&radius=${radius}&key=AIzaSyBS5BBHqgotSUhxHPzwolUD1dzyLm1Mnps`;
    
        try {
            const resp = await fetch(url);
            const json = await resp.json();
            if(json && json.results){
                const coords = json.results.map(item => ({
                    latitude: item.geometry.location.lat,
                    longitude: item.geometry.location.lng,
                }));
                setResults(json.results);
                if(coords.length){
                    map.current?.fitToCoordinates(coords, {
                        edgePadding: {
                            top: 50,
                            right: 50,
                            bottom: 50,
                            left: 50
                        },
                        animated: true
                    });
                    Keyboard.dismiss();
                }
            }
        } catch (e) {
            console.error(e);
        }
    };
    

    return (
        <GestureHandlerRootView style={styles.container}>
        <MapView
            style={styles.map}
            ref = {map}
            initialRegion={INITIAL_POSITION}
            provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
        >
            {results.length ? results.map((item, i) => {
                const coord: LatLng = {
                    latitude: item.geometry.location.lat,
                    longitude: item.geometry.location.lng,
                }
                
                //return <Marker ref = {markerRef} key={`search-item-${i}`}  onPress={() => {toggleSaveLocationPopup()}} coordinate={coord} title={item.name} description={item.formatted_address ? item.formatted_address : ""}/>       
                return (
                    <Marker
                        key={`search-item-${i}`}
                        onPress={() => handleMarkerPress(i)}
                        coordinate={coord}
                        title={item.name}
                        description={item.formatted_address ? item.formatted_address : ""}
                        pinColor={(savedMarkerIndexes.includes(i) && i === selectedMarkerIndex) ? "green" : (i === selectedMarkerIndex ? "blue" : "red")}

                    />
                );
            }): null}
        </MapView>
        
        <View style={styles.topButtonsContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigateToScreen("FindComposter")}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            </View>
        <View style={styles.searchBox}>
            <Text style = {styles.searchBoxLabel}>{message} nearby:</Text>
            <TextInput style={styles.searchBoxField}
            placeholder="Enter ZIP code or City, State" 
            placeholderTextColor="#000" 
            onChangeText={setSearchText}
            autoCapitalize="sentences"
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={searchPlaces}>
                <Text style={styles.buttonLabel}>Search</Text>
            </TouchableOpacity>
        </View>
        <Modal animationType="slide" transparent={true} visible={showSaveLocationPopup} onRequestClose={toggleSaveLocationPopup}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text>Save Location?</Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={saveLocation}>
                    <Text style={styles.buttonLabel}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleSaveLocationPopup}>
                  <Text style={styles.closeButton}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
},
map: {
    width: "100%",
    height: "100%",
},
searchBox: {
    position: "absolute",
    top: 50,
    width: "90%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#aaa",
    backgroundColor: "white",
    padding: 8,
    alignSelf: "center",
},
searchBoxLabel:{
    fontSize: 25,
    textAlign: "center"
},
searchBoxField: {
    borderColor: "#777",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10
},
buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#26f",
    borderRadius: 8,
},
buttonLabel: {
    fontSize: 18,
    color: "white",
},
backButton:{
    backgroundColor: "#26a69a",
    padding: 10,
    margin: 10,
    borderRadius: 5,
},
topButtonsContainer: {
    position: "absolute",
    top: 5,
    zIndex:1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 40 : 20, // Adjust for status bar height
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
  },
});

export default Map;