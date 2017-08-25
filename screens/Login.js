import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Image, View } from 'react-native';
import LoginForm from '../components/LoginForm';


export default class Login extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
        <Image source={require('../assets/images/loginScreen2.jpg')} style={styles.container}>
          <View style={styles.logocontainer}>
              <Image source={require('../assets/icons/world2.png')} stayle={styles.logo}>
              </Image>
          </View>
          <LoginForm />
        
        </Image>
    );
  }
  
};
const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignSelf:'stretch',
    width:null,
    padding:20,
  },
  logocontainer:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  },
  logo:{
    width:2,
    height:2
}
});
