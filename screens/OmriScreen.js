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
        <Text  style={styles.bigblue}>Omris new screen 1</Text>
        <Text style={styles.red}>Omris new screen 1</Text>
        <MyList />
     </View>
    );
  }
}
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },

});
