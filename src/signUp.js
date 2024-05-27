import React, { useRef, useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Modal,
    Alert,
    ImageBackground, TextInput, Pressable,
} from "react-native";
import {
    GestureHandlerRootView,
    Gesture,
    GestureDetector,
} from "react-native-gesture-handler";
import globalStyles from './styles/globalStyles.js';
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";


const SignUp = () => {
    const navigation = useNavigation();
    const {email,setEmail}=  useState("");
    const {name, setName}=  useState("");
    const {password,setPassword}=  useState("");

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


                <View style={styles.buttonView}>
                    {/* change this to direct user to home page*/}
                    <Pressable style={styles.button} onPress={() => Alert.alert("Login Successfuly!","see you in my instagram if you have questions : must_ait6")}>
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
});

export default SignUp;