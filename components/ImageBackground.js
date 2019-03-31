import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class ImageBackground extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
        
        </Text>
        <Image style={styles.logo} source={require('../assets/dhs1s.jpg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
  },
  logo: {
    height: 126,
    width: 224
  }
});
