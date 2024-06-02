import React, { useRef, useEffect, useState } from "react";

import {
    View,
    Animated,
    Image,
    StyleSheet,
    SafeAreaView,
    Text,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import globalStyles from "./styles/globalStyles";


const CenterHome = () => {
    return (
        <SafeAreaView style={[globalStyles.AndroidSafeArea, styles.container]}>

            {/* greeting header and profile picture*/}
            <View style={styles.headerView}>
                <View>
                    <Text>Welcome Back,</Text>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>Center Name</Text>
                </View>
                <Image
                    style={styles.profileImage} // Use the new style
                    source={require('./assets/profilePics/Rachel Pu square.jpg')}/>
            </View>

            {/* preview of tree */}
            <View style = {styles.treePreviewView}>
                <Image
                    style={styles.treeImage}
                    source={require('./assets/fruitTrees/apple1.png')}/>
                <View style={styles.treePreviewText}>
                    <Text style = {{fontWeight: 'bold', fontSize: '26px', color: '#e7e7e7'}}>Apple Tree</Text>
                    <Text style = {{color: '#e7e7e7'}}>13 weeks old</Text>
                </View>
            </View>

        {/* */}



        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        margin: 20,
        flexDirection: 'column',
        gap: 20,
    },
    headerView: {
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between', // Add this line
    },
    profileImage: {
        marginTop: -10,
        width: 70,
        height: 70,
        borderRadius: 50, // Add this line
    },
    treePreviewView: {
        height: '60%',
        justifyContent: 'space-between',
        padding: '4.5%',
        backgroundColor: '#5f7046',
        borderRadius: 20,
        flexDirection: 'column',
    },
    treeImage: {
        width: '100%',
        height: '80%',
        borderRadius: 12,
    },
    treePreviewText: {
        // backgroundColor: 'red',
        width: '45%',
    },
    treePreviewProgression:{
        backgroundColor: 'blue',
        height: '100%',
        width: '23%',
    }
});
export default CenterHome;