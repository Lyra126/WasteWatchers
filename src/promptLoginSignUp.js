import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';


const PromptLoginSignUp = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('./assets/plantingTrees.jpeg')}
                resizeMode="contain"
            />
            <Text style={styles.welcometext}>Welcome to WasteWatchers!</Text>
            <Text style={styles.text}>Please login or sign up to continue</Text>
            <TouchableOpacity style={styles.loginButton} onPress={() => {navigation.navigate('Login')}}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpButton} onPress={() => {navigation.navigate('SignUp')}}>
                <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 40,
    },
    image: {
        width: '100%', // Use percentage to make the image responsive
        height: '30%', // Adjust as needed
        marginTop: '45%',
    },
    welcometext: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    text:{
        fontSize: 16,
        color: 'grey',
        textAlign: 'center',
        marginVertical: 20,
    },
    loginButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 15,
        marginVertical: 10,
    },
    signUpButton: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 15,
        marginVertical: 10,
    },

    loginText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    signUpText:{
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default PromptLoginSignUp;