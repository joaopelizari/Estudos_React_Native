import {StyleSheet} from 'react-native';
import { bold } from 'ansi-colors';


const stylesLogin = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2c3e50',
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
      width: 300,
      height: 42,
      backgroundColor: '#3498db',
      marginTop: 30,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    botaoText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    input: {
        marginTop: 20,
        padding: 10,
        width: 350,
        height: 40,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
    }
  });

  export default stylesLogin;