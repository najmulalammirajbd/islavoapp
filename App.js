import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Song from './src/components/Song/Song';
import Podcast from './src/components/Podcast/Podcast';
import Artists from './src/components/Artists/Artists';
import Media from './src/components/Media/Media';

// Plus...
import plus from './assets/plus.png'

// Font Awesome Icons...
import { FontAwesome5 } from '@expo/vector-icons'
import { useRef } from 'react';

const Tab = createBottomTabNavigator();

// Hiding Tab Names...
export default function App() {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        showLabel: false,
        // Floating Tab Bar...
        style: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 40,
          marginHorizontal: 20,
          // Max Height...
          height: 60,
          borderRadius: 10,
          // Shadow...
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
          paddingHorizontal: 20,
        }
      }}>

        {
          // Tab Screens....

          // Tab ICons....
        }
        <Tab.Screen name={"Song"} component={Song} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="music"
                size={20}
                color={focused ? '#1dc1bc' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Podcast"} component={Podcast} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="microphone-alt"
                size={20}
                color={focused ? '#1dc1bc' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>


        {

          // Extra Tab Screen For Action Button..
        }

        <Tab.Screen name={"ActionButton"} component={EmptyScreen} options={{
          tabBarIcon: ({ focused }) => (

            <TouchableOpacity>
              <View style={{
                width: 55,
                height: 55,
                backgroundColor: '#1dc1bc',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS == "android" ? 50 : 30
              }}>
                <Image source={plus} style={{
                  width: 30,
                  height: 40,
                  tintColor: 'white',
                }}></Image>
              </View>
            </TouchableOpacity>
          )
        }}></Tab.Screen>

        <Tab.Screen name={"Artists"} component={Artists} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="user-alt"
                size={20}
                color={focused ? '#1dc1bc' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"SocialMedia"} component={Media} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="align-justify"
                size={20}
                color={focused ? '#1dc1bc' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

      </Tab.Navigator>

      <Animated.View style={{
        width: getWidth() - 20,
        height: 2,
        backgroundColor: '#1dc1bc',
        position: 'absolute',
        bottom: 98,
        // Horizontal Padding = 20...
        left: 50,
        borderRadius: 20,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View>
    </NavigationContainer>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width

  // Horizontal Padding = 20...
  width = width - 80

  // Total five Tabs...
  return width / 5
}

function EmptyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function NotificationScreen() {
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

function SearchScreen() {
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
