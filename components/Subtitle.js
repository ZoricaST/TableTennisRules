import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Subtitle extends React.Component {
  render() {
    return (
      <View >
       
       <Text style={{ fontSize: 24,padding:10, color: '#4a90e2', fontWeight: 'bold'}} >{this.props.name}!</Text>
      </View>
    );
  }
}

