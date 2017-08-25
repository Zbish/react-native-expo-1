import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
 
} from 'react-native';
import { CheckBox, Button,  } from 'react-native-elements';


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
            <View style={styles.chekcontainer}>
            <CheckBox size={15} center={true} style={styles.checkbox}
                    checked={true}/>
                    <Text style={styles.textInput}>{this.props.item.key}</Text>
            </View>
            {/* <View>
                     <TextInput style={styles.TextInput}
                      onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                       />
                    
                    <Button title="Edit" style={styles.btnedit}
                    onPress={() =>this.props.onEdit(this.props.item.key,this.state.text)}
                    ></Button>
                    </View> */}
            <View style={styles.buttoncontainer}>
                    <Button title="X" style={styles.btndelete}
                    onPress={() =>this.props.onRemove(this.props.item.key)}
                    ></Button>
            </View>        
                </View>
    }
}


const styles = {
    container: {
        display: 'flex',
        alignSelf:'stretch',
        flexDirection: 'row',
        backgroundColor:'rgba(255,255,255,0.9)',
        borderColor:'#fff',
        borderRadius:10,
        borderWidth:0.6,
        margin:2,
    },
    buttoncontainer:{
  flexDirection: 'row',
  justifyContent:'flex-end',
flex:1,
    },
    chekcontainer:{
flexDirection: 'row',
flex:1,
    },
    checkbox:{
        padding:15,
    },
    textInput:{
        color:'#000000',
        alignSelf:'stretch',
        padding:15,

    },
    btndelete:{
        backgroundColor: '#397af8',
        borderRadius:20,
        
    },
    // btnedit:{
    //     alignSelf:'right',
    //     Color: '#7ABA7A',
    //     borderRadius:20,
    // },
}