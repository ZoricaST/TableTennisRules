import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class TitleF extends React.Component {
  render() {
    return (
      <View >
       
       <Text style={{ fontSize: 20,
      padding: 10,
    borderRadius: 1,
    borderWidth: 3,
    borderColor: '#0000b3',
    color:'#0000b3'}} >{this.props.name}</Text>
      </View>
    );
  }
}

