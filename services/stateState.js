import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class stateState extends React.Component {
 constructor(){
   super()
   this.state = {
    data : [{id:"gggggg",ud:"aaaaaa"},{id:"ddddd",ud:"aaaaaa"},{id:"ddddd",ud:"omri"},{id:"ddddd",ud:"dor"},{id:"ddddd",ud:"cccccc"},{id:"ddddd"}]
 
  } 
 }
//  addData(senddata){
//   var {data} = this.state;
//   data.push({key: senddata});
//   this.setState({data: data});
//  }
//  getData()
//  {

//  } 
// deletEdATA(key4) {
//   var {data} = this.state;
//   var {dataDelete} = this.state;
//   var index;
// for(i = 0 ; i < data.length ; i++)
//   {
//     if(data[i].key == key4)
//       {
//        dataDelete.push({key:data[i]});
//        data.splice(i,1);
//        break;
//       }
    
//   }
//   this.setState({dataDelete:dataDelete});
//   this.setState({data:data});
//   }

  render() {
    return (
      <View stateProp={this.state.data} >
         
     </View>
    );
  }
}
const styles = StyleSheet.create({
  
  
});
