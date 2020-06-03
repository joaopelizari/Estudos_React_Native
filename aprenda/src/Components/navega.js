import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Home from './Home';
import Login from './Login';
// import CadastroTime from './CadastroTime';

const Stack = createStackNavigator();

export default function Navega( { navigation }) {
return (
    <NavigationContainer>

      <Stack.Navigator>

      <Stack.Screen name="Login" component={Login}  />  

      <Stack.Screen name="Home" component={Home}  />    

      {/* <Stack.Screen name="CadastroTime" component={CadastroTime}  />    */}

      </Stack.Navigator>

    </NavigationContainer>

  );
}


