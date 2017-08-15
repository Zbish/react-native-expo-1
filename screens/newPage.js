 
import React from 'react';
import { ScrollView, StyleSheet,Text,Button,View,Image,style,TouchableHighlight } from 'react-native';
import MyList from '../components/Lists/MyList.js';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'newPage',
  };

  constructor(props) {
    super(props);
    this.state = {myText: 'First text'}
  }

  onPress() {

      if(this.state.myText == 'First text')
        {
          this.setState({myText: 'Second text'})
        }
      else
        {
          this.setState({myText: 'First text'})
        }
  }

  render() {
    return (
        <ScrollView style={styles.container}>
            <Text>{this.state.myText}</Text>
            <Button style={styles.pushButton}
              onPress={() => this.onPress()}
              title="go"
              color="#841584"/>
              <View style={styles.robot_pic}
              >
                    <Image
              source={require('../assets/images/robot-prod.png')}
            />
                <Image
              source={require('../assets/images/robot-dev.png')}
            />
                 <Image
              source={require('../assets/images/robot-prod.png')}
            />
          </View>
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
    robot_pic:{
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  },
});
