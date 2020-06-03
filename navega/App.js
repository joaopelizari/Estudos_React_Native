import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Home from './src/Home/Home';
import Sobre from './src/Sobre/Sobre';

const Stack = createStackNavigator();

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Sobre" component={Sobre}  />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text style={styles.welcome}>Welcome to React Native!</Text>
    //   <Text style={styles.instructions}> NAVEGA </Text>
    // </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
