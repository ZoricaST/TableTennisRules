import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Title extends React.Component {
  render() {
    return (
      <View >
       
       <Text style={{ fontSize: 34, textAlign: 'center' }} >{this.props.name}</Text>
      </View>
    );
  }
}

