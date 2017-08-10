import React from 'react';
import MyListItem from './MyListItem.js';
import RecepieService from '../../services/recepie.js';

import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class MyList extends React.Component {
  componentWillMount() {
    this.setState({data : [{key: 'a'}, {key: 'b'}],
                    currentValue: this.props.initialText});
  }

  onPress() {
    var {data} = this.state;
    data.push({key: this.state.currentValue});
    this.setState({data: data});
    RecepieService.save("dfgdfsdfsd");

  }

  onChange(val) {
    this.setState({currentValue: val})
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(val) => this.onChange(val)}
          value={this.state.currentValue}
        />
        <Button style={styles.pushButton}
          onPress={() => this.onPress()}
          title="Learn More11"
          color="#841584"
        />
        {
          this.state.data.map((item, index) => {
            return <MyListItem key={index} item={item} />
          })
        }
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
