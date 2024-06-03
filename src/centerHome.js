import React from "react";
import { View, Image, StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import globalStyles from "./styles/globalStyles";

const CenterHome = ({ email }) => {
    return (
        <SafeAreaView style={[globalStyles.AndroidSafeArea, styles.container]}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                {/* greeting header and profile picture*/}
                <View style={styles.headerView}>
                    <View>
                        <Text>Welcome Back</Text>
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Center Name</Text>
                    </View>
                    <Image
                        style={styles.profileImage}
                        source={require('./assets/profilePics/Rachel Pu square.jpg')}
                    />
                </View>

                {/* preview of tree */}
                <View style={styles.treePreviewView}>
                    <Image
                        style={styles.treeImage}
                        source={require('./assets/fruitTrees/apple1.png')}
                    />
                    <View style={styles.treePreviewText}>
                        <Text style={{ fontWeight: 'bold', fontSize: 26, color: '#e7e7e7' }}>Apple Tree</Text>
                        <Text style={{ color: '#e7e7e7' }}>13 weeks old</Text>
                    </View>
                </View>

                {/* User Fun Fact Information */}
                <View style={styles.userFunFactInformation}>
                    <Text>You've helped to save</Text>
                </View>

                {/* Add more content here as needed */}
                <View style={styles.additionalContent}>
                    <Text>Additional content goes here...</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    scrollContainer: {
        padding: 20,
        gap: 20,
    },
    headerView: {
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileImage: {
        marginTop: -10,
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    treePreviewView: {
        height: 400,  // Adjust height if necessary
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
        width: '45%',
    },
    userFunFactInformation: {
        backgroundColor: '#5f7046',
        borderRadius: 20,
        padding: '4.5%',
        height: 120,
    },
    additionalContent: {
        backgroundColor: '#ccc',  // Just an example background color
        borderRadius: 20,
        padding: '4.5%',
        height: 200,
    }
});

export default CenterHome;
