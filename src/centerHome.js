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

            {/* */}
            <View>

            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        margin: 20,
    },
    headerView: {
        marginTop: '10%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between', // Add this line
    },
    profileImage: {
        marginTop: -10,
        width: 70,
        height: 70,
        borderRadius: 50, // Add this line
    },
});
export default CenterHome;