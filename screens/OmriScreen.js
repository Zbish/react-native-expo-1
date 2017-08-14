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
      <View>
        <Text  style={styles.bigblue}>To Do List</Text>
        <MyList />
        <MyList initialText='This is the firxt text' />
     </View>
    );
  }
}
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign:'center',
  },
  red: {
    color: 'red',
  },

});
