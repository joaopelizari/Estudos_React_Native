import {StyleSheet} from 'react-native';
import { bold } from 'ansi-colors';


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
    slogan: {
      fontSize: 26,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
      fontSize: 14,
    },
    botao: {
      width: 100,
      height: 30,
      backgroundColor: '#00BFFF',
    },
    textobotao: {
      fontSize: 26,
      textAlign: 'center',
      margin: 10,
    },
  });

  export default styles;