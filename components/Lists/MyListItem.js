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

    }

    onEditPress() {

    }
    
    render() {
        return <View style={styles.container}>
                    <Text style={styles.text}>{this.props.item.key} ffffffddd</Text>
                    <Button title="Edit"></Button>
                    <Button title="X"></Button>
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