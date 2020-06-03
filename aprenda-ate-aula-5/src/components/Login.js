import React, { Component } from 'react';

import { Text, Stylesheet, View, Image, TextInput, TouchableOpacity, Alert  } from 'react-native';

import styles from '../styles/index';


export default class App extends Component {

  clicou= () => {
    Alert.alert( "AprendaRN" , "Vocë clicou em mim!!" );
  }

  render () {
    return(
      <View style={styles.container}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
        <TextInput
          style={styles.input}
          placeholder='Digite seu Email'
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder='Digite sua Senha'
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={ () => {this.clicou()}}
        >
          <Text style={styles.botaoText}>Login</Text>
        </TouchableOpacity>
      </View>

    )
  }
}
