import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { FontAwesome5 } from '@expo/vector-icons'
export default function App() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#1dc1bc', fontSize: 19 }}>Follow islavo</Text>
            <View style={{ flexDirection: 'row', marginTop: 7, marginBottom: 7 }}>
                <Text style={{ color: '#1dc1bc', fontSize: 17 }}
                    onPress={() => Linking.openURL('http://facebook.com/islavo')}><FontAwesome5
                        name="facebook-square"
                        size={30}
                    ></FontAwesome5></Text>
                <Text style={{ color: '#1dc1bc', fontSize: 17, marginLeft: 5 }}
                    onPress={() => Linking.openURL('https://twitter.com/islavobd')}><FontAwesome5
                        name="twitter-square"
                        size={30}
                    ></FontAwesome5></Text>
                <Text style={{ color: '#1dc1bc', fontSize: 17, marginLeft: 5 }}
                    onPress={() => Linking.openURL('https://www.youtube.com/c/ISLAVOBD')}><FontAwesome5
                        name="youtube-square"
                        size={30}
                    ></FontAwesome5></Text>
                <Text style={{ color: '#1dc1bc', fontSize: 17, marginLeft: 5 }}
                    onPress={() => Linking.openURL('https://www.linkedin.com/company/islavo/')}><FontAwesome5
                        name="linkedin"
                        size={30}
                    ></FontAwesome5> </Text>
            </View>
            <Text style={{ color: '#1dc1bc', fontSize: 10 }}
                onPress={() => Linking.openURL('https://islavobd.web.app/privacypolicy')}> Privacy Policy for ISLAVO </Text>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});