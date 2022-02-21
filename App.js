import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView, TextInput, Modal, SafeAreaView } from 'react-native';

export default function App() {
  const [tela, setTela] = useState('login');
  const [modalVisivel, setModalVisivel] = useState(false);

  switch(tela) {
    case 'login':
      return getTelaLogin();
    case 'tabuleiros':
      return getTelaTabuleiros();
    case 'tabuleiro':
      return getTelaTabuleiro();
    case 'menu':
      return Menu({navigation});
  }

  function getTelaLogin(){
    return (
      <KeyboardAvoidingView style={styles.background}>

        <View style={styles.containerLogo}>
          <Image style={styles.logo} source={require('./img/dado-60px.png')}/>
          <Text style={styles.textLogin}>Tabuleiro Digital</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.textLogin}>Metodo de Entrada</Text>
          <TextInput style={styles.input} placeholder='Nome de Usuario' autoCorrect={false} />
          <TextInput style={styles.input} placeholder='Senha' autoCorrect={false} secureTextEntry={true}/>
          <TouchableOpacity style={styles.btnLogin}  onPress={ () => setTela('tabuleiros') }>
            <Text style={styles.textEntrar}>ENTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLogin} onPress={ () => setTela('tabuleiros') }>
            <Text style={styles.textEntrar}>Acesso Local</Text>
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
      <SafeAreaView style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Modal transparent visible={modalVisivel}>
              <View>
                <View style={{width: '50%', minHeight: '40%', backgroundColor: 'gray', marginLeft: 5, borderRadius: 15, padding: 10}}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 22, color: 'white', fontWeight: 'bold', marginBottom: 10}}>Menu</Text>
                  </View>
                  <View>
                    <TouchableOpacity>
                      <Text style={styles.textoMenu} onPress={() => setModalVisivel(false)}>Fechar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.textoMenu}>Configuracoes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.textoMenu} onPress={() => setTela('login') & setModalVisivel(false)}>Logout</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
            <View style={styles.backgroundImg}>
              <TouchableOpacity style={styles.btnMenu} onPress={ () => setModalVisivel(true)}>
                <Image style={styles.imgMenu} source={require('./img/barra-de-menu.png')}/>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Tela dos Tabuleiros</Text>
            </View>
      </SafeAreaView>
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
    alignItems: 'center',
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
    marginBottom: 5,
  },
  textLogin: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  textEntrar: {
    color: '#fff',
    fontSize: 17,
  },
  btnRegistrar: {
    marginTop: 10,
  },
  textRegistrar: {
    color: 'black',
  },
  backgroundImg: {
    flexDirection: 'row',
    width: '20%',
    marginTop: 30,
  },
  btnMenu: {
    marginLeft: 20,
  },
  imgMenu: {
    width: 30,
    height: 30,
  },
  textoMenu: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  }
});
