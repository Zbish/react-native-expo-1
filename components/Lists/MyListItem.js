import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';


export default class MyListItem extends React.Component {

    onRemovePress() {
    var a = this.props.item.key;
     console.log(a);
    // var {data} = this.state;
    // data.splice(0,1);
    // this.setState({data:data});
    }

    onEditPress() {
    // var {data} = this.state;
    // data.push({key: this.state.currentValue});
    // data.shift()
    // this.setState({data: data});
    }
    
    render() {
        return <View style={styles.container}>
                    <Text style={styles.text}>{this.props.item.key}</Text>
                    <Button title="Edit"
                     onPress={() => this.onEditPress()}
                    ></Button>
                    <Button title="X"
                    onPress={() =>this.onRemovePress()}
                    ></Button>
                </View>
    }
}


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
    },

    text: {
        marginRight: 'auto'
    }
}