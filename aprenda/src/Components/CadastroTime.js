import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../styles/styleGeral';

export default function CadastroTime( { navigation }) {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.Text}> Tela Cadastro Time </Text>
    </View>
    </SafeAreaView>
  );
}
