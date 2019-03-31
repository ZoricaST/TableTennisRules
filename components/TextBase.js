import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class TextBase extends React.Component {
  render() {
    return (
      <View >
       
       <Text style={{ fontSize: 14,padding: 10, textAlign: 'justify' }} >{this.props.name}!</Text>
      </View>
    );
  }
}

