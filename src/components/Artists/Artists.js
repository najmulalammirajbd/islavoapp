import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 350,
        height: 500,
        marginLeft: 10,
    },
    logo: {
        width: 66,
        height: 58,
    },
});

export default function App() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#ccce27', fontSize: 25 }}>Artists</Text>
            <Text style={{ color: '#1dc1bc', fontSize: 17 }}>Mamunur Rashid</Text>
            <Text style={{ color: '#1dc1bc', fontSize: 17 }}>Sheikh Afzal Hussain Sadi</Text>
            <Text style={{ color: '#1dc1bc', fontSize: 17 }}>Anwar Hussain Gulzar</Text>
            <Text style={{ color: '#1dc1bc', fontSize: 17 }}>Sadikur Rahman</Text>
            <Text style={{ color: '#1dc1bc', fontSize: 17 }}>Mushir Alom Mijan</Text>
            <Text style={{ color: '#1dc1bc', fontSize: 17 }}>Sayeem Ahmod Emon</Text>
            <Text style={{ color: '#1dc1bc', fontSize: 17 }}>Abdullah Al Farhan</Text>
            <Text style={{ color: '#1dc1bc', fontSize: 17 }}>Zakaria Ahmad Shahan</Text>
        </View>
    );
}