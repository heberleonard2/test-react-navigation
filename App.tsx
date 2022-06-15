/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import * as React from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f1f1f1',
      }}>
      <TextInput
        placeholder="Digite aqui"
        style={{
          height: 55,
          margin: 16,
          backgroundColor: 'red',
        }}
      />
    </View>
  );
}

function TestScreen() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#f1f1f1',
      }}>
      {[...Array(16).keys()].map(i => (
        <TextInput
          key={i}
          placeholder="Digite aqui"
          style={{
            height: 55,
            margin: 16,
            color: '#fff',
            backgroundColor: 'black',
          }}
        />
      ))}
    </ScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Test" component={TestScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
