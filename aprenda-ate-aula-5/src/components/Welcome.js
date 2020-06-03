import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from '../styles/index';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
  });

export default class Welcome extends Component {


  state = {
    alerta: ''
  }
  
  alternar = () => {
    this.setState({
      alerta: this.state.alerta ? '' : 'Texto alterado por state'
    })
  }

    render() {
        return (


                <View style={styles.container}>


                  <TouchableOpacity
                      style={styles.botao}
                      onPress={this.alternar}
                  >
                      <Text style={styles.textobotyao}>Mudar state</Text>
                  </TouchableOpacity>


                  <Text style={styles.welcome}>{this.props.titulo}</Text>
                  <Text style={styles.slogan}>{this.props.slogan}</Text>
                  <Text style={styles.instructions}>{instructions}</Text>
                  <Text> { this.state.alerta } </Text>
                </View>
              )
    }
}
