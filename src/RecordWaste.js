import React, { useState } from 'react';
import { View, Text, TextInput, Button,StyleSheet } from 'react-native';

const RecordWaste = () => {
    const [wasteAmount, setWasteAmount] = useState('');

    const handleRecordWaste = () => {
        // Add logic to record waste amount
        console.log('Waste recorded:', wasteAmount);
        // You can implement logic to send the recorded data to your backend here
    };

    return (
        <View style={styles.viewStyle}>
            <Text style = {styles.viewText}>Record Waste Composted</Text>
            <TextInput
                placeholder="Enter waste amount in pounds"
                value={wasteAmount}
                onChangeText={text => setWasteAmount(text)}
                keyboardType="numeric"
                style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 10, width: '80%' }}
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
