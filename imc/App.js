/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  ComponentProvider,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

this.state = {altura: 0, massa: 0, resultrado: 0, resutadoText: ''};

const Calular = () => {
  

};

const App: () => ReactNode = () => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.entradas}>
        <TextInput
          placeholder="Massa"
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Altura"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Calular</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>30</Text>
      <Text style={[styles.resultado, {fontSize: 35} ]}>nivel 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 80,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 24,
  },
  entradas: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#89ffa5',
    fontSize: 50,
  },
  buttonText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color: '#6dc4a4',
    fontWeight: 'bold',
  },
  resultado: {
    alignSelf: 'center',
    color: 'lightgray',
    fontSize: 65,
    padding: 15,
  },
});

export default App;
