import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../styles/styleGeral';

export default function Home( { route }) {
  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.View}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.botaoText}> Tela Home {route.params.nome} </Text>
      </View>
      {/* <View style={styles.container}>
        <Button
            style={styles.botao}
            title="Cadastro Time"
            onPress={ () => navigation.navigate('cadastroTime') }
          />
      </View> */}
      
    </SafeAreaView>
  );
}
