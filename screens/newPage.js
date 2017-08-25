 
import React from 'react';
import { Image,StyleSheet } from 'react-native';
import ListOflist from '../components/Lists/ListOflist.js';
import mylist from '../services/mylist.js';

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : mylist.getlist()
    }
  console.log("my list "  + mylist.getlist())
  }
  render() {
    return (
        <Image source={require('../assets/images/mario.png')} style={styles.container}>

          <ListOflist myprop={this.state.data} />
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
});
