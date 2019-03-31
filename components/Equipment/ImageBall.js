import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class ImageBall extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
        
        </Text>
       <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/fakultet-76497.appspot.com/o/dhs1s.jpg?alt=media&token=c91d0af2-db12-4270-b91d-46b7ddaeb1e1'}}
       style={{width: 224, height: 126}} />

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
