import React, { useRef, useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Modal,
    ImageBackground,
} from "react-native";
import {
    GestureHandlerRootView,
    Gesture,
    GestureDetector,
} from "react-native-gesture-handler";

const Home = () => {

    return (
        <Text style = {styles.text}>Hello! Welcome to WasteWatchers</Text>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: { // Add this style
        fontSize: 20,
        textAlign: 'center',
    },
});

export default Home;