import React, { useState } from 'react';
import { View, Text, TextInput, Button,StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import axios from "axios"; 

const RecordWaste = () => {
    const [wasteAmount, setWasteAmount] = useState('');
    const [email, setEmail] = useState('');

    const getUserData = async (key) => {
        const result = await SecureStore.getItemAsync(key);
        if (result) {
            setEmail(result);
            return result;
        } else {
            console.log('No value stored under that key.');
            return null;
        }
    }
    const handleRecordWaste = () => {
        
        const recordWaste = async () => {
            console.log("record: ", wasteAmount);
            const userEmail = await getUserData("email");
            if(userEmail){
                console.log("test");
                try {
                    console.log("Sending request with:", { userEmail, wasteAmount });
                    const response = await axios.get(`http://192.168.1.159:8080/users/addWaste`, {
                        params: {
                            email: userEmail,
                            wasteAmount: wasteAmount
                        }
                    });
                
                    console.log("Sending request with:", { userEmail, wasteAmount });
                    const response2 = await axios.get(`http://192.168.1.159:8080/users/updatePoints`, {
                        params: {
                            email: userEmail,
                            points: wasteAmount
                        }
                    });
                } catch (error) {
                    console.error("Error getting user data:", error);
                }
            }
          };
          recordWaste();
    };

    return (
        <View style={styles.viewStyle}>
            <Text style = {styles.viewText}>Record Waste Composted</Text>
            <TextInput
                placeholder="Enter waste amount in pounds"
                value={wasteAmount}
                onChangeText={text => setWasteAmount(text)}
                style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 10, width: '80%' }}
                keyboardType="numeric"
                returnKeyType="done"
            />

            <Button style = {styles.sButton} title="Submit" onPress={handleRecordWaste} />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        height: 650,  // Adjust height if necessary
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4.5%',
        backgroundColor: '#5f7046',
        borderRadius: 20,
        margin:20,
        marginTop: 80,
        width: '90%',
        height: '80%',
        flexDirection: 'column',
    },
    viewText: {
        color: '#FFFFFF',
        fontSize: 30
    },
    sButton: {
        backgroundColor: '#007bff', // Button background color
        borderRadius: 10, // Button border radius
        paddingVertical: 12, // Vertical padding
        paddingHorizontal: 24,
    }
});

export default RecordWaste;
