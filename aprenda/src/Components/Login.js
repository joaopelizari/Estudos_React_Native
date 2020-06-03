import * as React from 'react';
import { Text, Stylesheet, View, Image, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../styles/styleLogin';
import { State } from 'react-native-gesture-handler';

state = {
  nome: ''
}

export default function Login( { navigation }) {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>

      <Text style={styles.welcome}>Welcome to React Native!</Text>
       <Image
             source={require('../assets/logo.png')}
             style={styles.logo}
       />
       <TextInput
             style={styles.input}
             onChangeText={ text => this.state.nome = text}
             placeholder='Digite seu Email'
       />
       <TextInput
             style={styles.input}
             secureTextEntry={true}
             placeholder='Digite sua Senha'
       />

      <Button
        title="Entrar"
        onPress={ () => navigation.navigate('Home', {nome: this.state.nome }) }
      />
    </View>
    </SafeAreaView>
  );
}

// import * as React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';

// import { Text, Stylesheet, View, Image, TextInput, TouchableOpacity  } from 'react-native';

// import styles from '../styles/styleLogin';

// export default function App({ route }) {
// return (
//   <SafeAreaView style={styles.container}>
//     <View style={styles.container}>
        
//       <Text style={styles.welcome}>Welcome to React Native!</Text>

//       <Image
//             source={require('../assets/logo.png')}
//             style={styles.logo}
//       />
//       <TextInput
//             style={styles.input}
//             placeholder='Digite seu Email'
//       />
//       <TextInput
//             style={styles.input}
//             secureTextEntry={true}
//             placeholder='Digite sua Senha'
//       />

//       <Text style={styles.welcome}> o parametro é {route.params.nome} </Text>

//     </View>

//   </SafeAreaView>
// );
// }
