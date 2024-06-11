import React, { useRef, useEffect, useState } from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, Modal, Alert, ImageBackground, TextInput, Pressable} from "react-native";
import { GestureHandlerRootView, Gesture, GestureDetector,} from "react-native-gesture-handler";
import globalStyles from './styles/globalStyles.js';
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from 'axios';


const SignUp = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [fruitTree, setFruitTree] = useState('');
    const [selectedTree, setSelectedTree] = useState(null);

    const handleTreeSelection = (treeType) => {
        setSelectedTree(selectedTree === treeType ? null : treeType);
    };

    const isTreeSelected = (treeType) => {
        return selectedTree === treeType;
    };


    const handleSignIn = () => {
        if(password!=confPassword){
            setErrorMessage("Passwords don't match!");
        } else{
            axios.get(`http://192.168.1.159:8080/users/get?email=${email}&password=${password}`)
                .then((response) => {
                    const userData = response.data;
                    if (userData) {
                        // User exists, proceed with login
                        onLogin(email);
                    } else {
                        // User not found, create a new user
                        axios.post('http://192.168.1.159:8080/users/createUser', {
                            tree_type: 'your_tree_type_value',
                            email_address: email,
                            name: 'user_name',
                            password: password
                        })
                        .then((response) => {
                            console.log('User created successfully:', response.data);
                            // Proceed with login after creating the user
                            onLogin(email);
                        })
                        .catch((error) => {
                            console.error('Error creating user:', error);
                        });
                    }
                })
                .catch((error) => {
                    // Error handling
                    console.error('Error signing in:', error);
                });
        }
    };
    return (
        <SafeAreaView  style={[globalStyles.AndroidSafeArea, styles.container]}>
            <TouchableOpacity style={styles.backButton} onPress={() => {navigation.navigate('PromptLoginSignUp')}}>
                <Text style={{fontSize: 37}}> ← </Text>
            </TouchableOpacity>
            <View style = {styles.loginInformation}>
                <Text style={styles.welcomeBack}>Let's get started!</Text>
                <Text style = {styles.welcomeText}>Just a few more steps until you join our family!</Text>
                <View style={styles.inputView}>
                    <View style={styles.inputSection}>
                        <Ionicons name="person" size={20} color="#000" />
                        <TextInput
                            style={styles.input}
                            placeholder='Name'
                            placeholderTextColor='#888888'
                            value={name}
                            onChangeText={setName}
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <FontAwesome name="envelope" size={20} color="#000" />
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            placeholderTextColor='#888888'
                            value={email}
                            onChangeText={setEmail}
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                    </View>

                    <View style={styles.inputSection}>
                        <Fontisto name="locked" size={22} color="#000" />
                        <TextInput
                            style={styles.input}
                            placeholder='Password'
                            placeholderTextColor='#888888'
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                    </View>
                </View>
                <View styles = {styles.chooseTreeContainer}>
                    <FontAwesome style={styles.title}>Choose Tree Type:</FontAwesome>
                    <View style={styles.treeButtonsContainer}>
                        <TouchableOpacity
                           style={[styles.treeButton, isTreeSelected("Apple") && { backgroundColor: '#65c500' }]}
                            onPress={() => handleTreeSelection("Apple")}
                        >
                            <Image source={require('./assets/logos/appleLogo.png')} style={styles.treeImage} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.treeButton, isTreeSelected("Peach") && { backgroundColor: '#65c500' }]}
                            onPress={() => handleTreeSelection("Peach")}
                        >
                            <Image source={require('./assets/logos/peachLogo.png')} style={styles.treeImage} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.treeButton, isTreeSelected("Orange") && { backgroundColor: '#65c500' }]}
                            onPress={() => handleTreeSelection("Orange")}
                        >
                            <Image source={require('./assets/logos/orangeLogo.png')} style={styles.treeImage} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.treeButton, isTreeSelected("Mango") && { backgroundColor: '#65c500' }]}
                            onPress={() => handleTreeSelection("Mango")}
                        >
                            <Image source={require('./assets/logos/mangoLogo.png')} style={styles.treeImage} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.treeButton, isTreeSelected("Banana") && { backgroundColor: '#65c500' }]}
                            onPress={() => handleTreeSelection("Banana")}
                        >
                            <Image source={require('./assets/logos/bananaLogo.png')} style={styles.treeImage} />
                        </TouchableOpacity>
                       
                    </View>
                </View>

                <View style={styles.buttonView}>
                    {/* change this to direct user to home page*/}
                    <Pressable style={styles.button} onPress={() => handleSubmit}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </Pressable>
                    <View style={styles.optionsText}>
                        <View style={{backgroundColor: 'lightgrey', height: 1, flex: 1, alignSelf: 'center'}} />
                        <Text style={{alignSelf:'center', paddingHorizontal:5, fontSize: 15, color: '#A9A9A9'}}>OR</Text>
                        <View style={{backgroundColor: 'lightgrey', height: 1, flex: 1, alignSelf: 'center'}} />
                    </View>
                </View>

                <View style={styles.mediaIcons}>
                    <View style={[styles.icons, {backgroundColor: '#e5e5e5'}]}>
                        <Image
                            source={{uri: 'https://img.icons8.com/?size=100&id=17949&format=png&color=000000'}}
                            style={{width: 40, height: 40}}
                        />
                    </View>
                    <View style={[styles.icons, {backgroundColor: '#e5e5e5'}]}>
                        <AntDesign name="apple1" size={35} color="black" />
                    </View>
                </View>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already have an Account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={[styles.signup,{marginLeft: 3}]}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6fbb58',
        padding: 40,
    },
    backButton: {
        marginLeft: 20,
    },
    loginInformation: {
        backgroundColor: 'white',

        height: '100%',
        borderRadius: 30,
        paddingTop: 50,
        marginTop: 70,
        paddingHorizontal: 26
    },
    welcomeBack: {

        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    welcomeText: {
        fontSize: 16,

    },
    image : {
        height : 160,
        width : 170
    },
    inputView : {
        marginTop: 50,
        gap : 18,
        width : "100%",
        marginBottom: 20
    },
    inputSection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        borderRadius: 20,
        paddingHorizontal: 20,
    },
    input: {
        height : 50,
        width : "80%",
        paddingHorizontal : 20,
        backgroundColor: "#eaeaea",
        borderRadius: 20
    },
    button : {
        backgroundColor : "#62af49",
        height : 45,
        width : "100%",
        borderRadius : 20,
        alignItems : "center",
        justifyContent : "center",
    },
    buttonText : {
        color : "white"  ,
        fontSize: 18,
        fontWeight : "bold"
    },
    buttonView :{
        width :"100%",
    },
    optionsText : {
        textAlign : "center",
        color : "gray",
        fontSize : 13,
        marginVertical: 30,
        flexDirection: 'row'
    },
    mediaIcons : {
        flexDirection : "row",
        gap : 22,
        alignItems: "center",
        justifyContent : "center",
        marginBottom : 23,
    },
    icons : {
        width : 55,
        height: 55,
        borderRadius : 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerView : {
        flexDirection : "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    footerText : {
        textAlign: "center",
        color : "gray",
    },
    signup : {
        color : "#65b439",
        textAlign: "center",
        fontWeight : "bold",

    }, 
    chooseTreeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 15,
        marginBottom: 10,
    },
    treeButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    treeButton: {
        backgroundColor: '#65c500',
        borderRadius: 10,
        padding: 10,
        marginRight: 10
    },
    treeImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    }

});

export default SignUp;