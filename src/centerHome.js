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
            <Text> Poop</Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6fbb58',
        padding: 40,
    },
});
export default CenterHome;