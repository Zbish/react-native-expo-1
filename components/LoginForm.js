import React from 'react';
import { StyleSheet, Text, TextInput, Image, View ,TouchableOpacity} from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
        <View style={styles.loginformcontainer}>

            <TextInput underLineColorAndroid='transparent'  placeholderTextColor="white" placeholder='Email' style={styles.textInput}></TextInput>
            <TextInput underLineColorAndroid='transparent' placeholderTextColor="white" placeholder='Password' style={styles.textInput}></TextInput>

            <View style={styles.btncontainer}>
              <TouchableOpacity style={styles.loginbtn}>
                <Text>Log In</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.registerbtn}>
                <Text>Register</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.forgotbtn}>
                <Text>Forgot Password</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
  }
  
};
const styles = StyleSheet.create({
  loginformcontainer:{
    alignItems:'center',
  },
  btncontainer:{
     flexDirection: 'row',
    marginBottom:50,
   
  },
  textInput:{
    color:'#757575',
    alignSelf:'stretch',
    padding:12,
    marginBottom:10,
    backgroundColor:'rgba(255,255,255,0.2)',
    borderColor:'#fff',
    borderRadius:20,
    borderWidth:0.6,
},
loginbtn:{
  backgroundColor:'#ecf0f1',
  alignSelf:'stretch',
  alignItems:'center',
  borderRadius:100,
  width:100,
  padding:14,
  marginTop:10,
},
registerbtn:{
  backgroundColor:'#bdc3c7',
  alignSelf:'stretch',
  alignItems:'center',
  borderRadius:100,
  width:100,
  
  padding:14,
  marginTop:10,
},
forgotbtn:{
  backgroundColor:'#e74c3c',
  alignSelf:'stretch',
  alignItems:'center',
  borderRadius:100,
  width:150,
  
  padding:14,
  marginTop:10,
},
});
