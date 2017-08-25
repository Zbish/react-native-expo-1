import React from 'react';
import MyListItem from './MyListItem.js';
import RecepieService from '../../services/recepie.js';
import { Keyboard} from 'react-native';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class MyList extends React.Component {
 
  componentWillMount() {
    this.setState({data : [],
                    currentValue: this.props.initialText});
   this.setState({dataDelete : [],
                      currentValue2: this.props.initialText});
  }
  addToDelete()
  {

  }
  onPress() {
    var {data} = this.state;
    data.push({key: this.state.currentValue});
    this.setState({data: data});
    RecepieService.save("dfgdfsdfsd");
    this.setState({currentValue: ""})
    console.log(data);
  }

  onChange(val) {
    this.setState({currentValue: val})
  }
onRemoveItem(key4) {
    var {data} = this.state;
    var {dataDelete} = this.state;
    var index;
  for(i = 0 ; i < data.length ; i++)
    {
      if(data[i].key == key4)
        {
         dataDelete.push({key:data[i]});
         data.splice(i,1);
         break;
        }
      
    }
    this.setState({dataDelete:dataDelete});
    this.setState({data:data});
    }
  onEditPress(key4,value) {
        var {data} = this.state;
    var index;
  for(i = 0 ; i < data.length ; i++)
    {
      if(data[i].key == key4)
        {
         data[i].key = value;
         break;
        }
      
    }
    this.setState({data:data});
    }
    handleKeyDown=()=> {
        var {data} = this.state;
        data.push({key: this.state.currentValue});
        this.setState({data: data});
        RecepieService.save("dfgdfsdfsd");
        this.setState({currentValue: ""})
        console.log(data);
  }
  render() {
    return (
      <View>
         <TextInput underLineColorAndroid='transparent'  placeholderTextColor="black" placeholder='Add to List' style={styles.textInput}
          onChangeText={(val) => this.onChange(val)}
          value={this.state.currentValue}
          onSubmitEditing={this.handleKeyDown}
        />
        {
          this.state.data.map((item, index) => {
            return <MyListItem key={index} item={item} 
            onRemove={(key)=>this.onRemoveItem(key)}
            onEdit={(key,textv)=>this.onEditPress(key,textv)}
            />
          })
        }
        <Text style={styles.finish}
        >Finish Task </Text>
     </View>
    );
  }
}
const styles = StyleSheet.create({
  textInput:{
    color:'#000000',
    alignSelf:'stretch',
    padding:8,
    marginBottom:10,
    backgroundColor:'rgba(122, 186, 122,0.7)',
    borderColor:'#fff',
    borderRadius:10,
    borderWidth:0.6,
    },
  finish:{
    color:'#000000',
    alignSelf:'center',
    padding:5,
    marginBottom:10,
    marginTop:15,
    backgroundColor:'rgba(122, 186, 122,0.7)',
    borderColor:'#fff',
    borderRadius:20,
    borderWidth:0.6,
  },
});
