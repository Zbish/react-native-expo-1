import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';


export default class MyListItem extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { text: '' };
 
  }
// onPress()
// {
//     this.state = '';
// }

    render() {
        return <View style={styles.container}>
                    <Text style={styles.text}>{this.props.item.key}</Text>
                     <TextInput style={styles.text}
                      onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        
                       />
                    <Button title="Edit"
                    onPress={() =>this.props.onEdit(this.props.item.key,this.state.text)}
                    ></Button>
                    <Button title="X"
                    onPress={() =>this.props.onRemove(this.props.item.key)}
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