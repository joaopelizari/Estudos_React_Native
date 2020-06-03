import React, { Component } from 'react';

import { View } from 'react-native';

import Welcome from './Welcome';
import styles from '../styles';

export default class App extends Component {



  render () {
    return(


        
        <Welcome
          titulo="Canal Geek Dev"
          slogan="Seu canal de nerdologia">
        </Welcome>  
    )
  }
}
