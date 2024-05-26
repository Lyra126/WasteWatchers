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

const Login = () => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => {navigation.navigate('SignUp')}}>
                <Text style={styles.signUpText}> ← </Text>
            </TouchableOpacity>
            <Text >Heya! Welcome Back!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 40,
    }
});

export default Login;