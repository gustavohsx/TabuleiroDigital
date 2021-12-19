import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView, TextInput } from 'react-native';

export default function App() {
  const [tela, setTela] = useState('login');
  const [usuario, setUsuario] = useState('');

  function telaTabuleiros() {
    setTela('tabuleiros');
  }

  switch(tela) {
    case 'login':
      return getTelaLogin();
    case 'tabuleiros':
      return getTelaTabuleiros();
    case 'tabuleiro':
      return getTelaTabuleiro();
  }

  function getTelaLogin(){
    return (
      <KeyboardAvoidingView style={styles.background}>

        <View style={styles.containerLogo}>
          <Image style={styles.logo} source={require('./img/dado-60px.png')}/>
        </View>

        <View style={styles.container}>
          <StatusBar style="auto" />
          <TextInput style={styles.input} placeholder='Nome de Usuario' autoCorrect={false} />
          <TextInput style={styles.input} placeholder='Senha' autoCorrect={false} secureTextEntry={true}/>
          <TouchableOpacity style={styles.btnLogin}  onPress={ () => telaTabuleiros() }>
            <Text style={styles.textLogin}>ENTRAR</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.btnRegistrar}>
            <Text style={styles.textRegistrar}>Criar Conta</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    );
  }

  function getTelaTabuleiros(){
    return (
      <View style={styles.guiaTabuleiros}>
        <StatusBar style="auto" />
        <Text>Tela dos Tabuleiros</Text>
      </View>
    );
  }

  function getTelaTabuleiro(){
    return (
      <View>
        <StatusBar style="auto" />
        <Text>Tabuleiro</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    height: 128,
    width: 128,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  input: {
    fontSize: 17,
    width: '90%',
    marginBottom: 15,
    backgroundColor: '#fff',
    color: 'black',
    borderRadius: 9,
    padding: 8,
  },
  btnLogin: {
    backgroundColor: 'blue',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
  },
  textLogin: {
    color: '#fff',
    fontSize: 17,
  },
  btnRegistrar: {
    marginTop: 10,
  },
  textRegistrar: {
    color: 'black',
  },
  guiaTabuleiros: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
