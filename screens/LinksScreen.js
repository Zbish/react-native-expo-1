 
import React from 'react';
import { ScrollView, StyleSheet,Text,Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import MyList from '../components/Lists/MyList.js';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'my second page',
  };

  constructor(props) {
    super(props);

    this.state = {myText: 'First text'}
  }
  onPress() {
      this.setState({myText: 'Second text'})
  }

  render() {
    return (
      <ScrollView style={styles.container}>
         <Text>{this.state.myText}</Text>

         <Button style={styles.pushButton}
          onPress={() => this.onPress()}
          title="My New Button"
          color="#841584"
        />

        <MyList initialText='This is the firxt text' />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
