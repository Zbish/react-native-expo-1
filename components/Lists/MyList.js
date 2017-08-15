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
    this.setState({data : [],
                    currentValue: this.props.initialText});
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
    var index;
  for(i = 0 ; i < data.length ; i++)
    {
      if(data[i].key == key4)
        {
         data.splice(i,1);
         break;
        }
      
    }
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
            return <MyListItem key={index} item={item} 
            onRemove={(key)=>this.onRemoveItem(key)}
            onEdit={(key,textv)=>this.onEditPress(key,textv)}
            />
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
