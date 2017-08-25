import React from 'react';
import MyList from '../components/Lists/MyList.js';

import {
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
  SectionList,
  Image,
} from 'react-native';

export default class OmriScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }


  render() {
    console.log("Rendered");
    return (
      <Image source={require('../assets/images/todolist.jpg')} style={styles.container}>
        
        <MyList />
     </Image>
    );
  }
}
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
});
