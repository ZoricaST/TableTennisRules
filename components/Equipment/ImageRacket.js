import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class ImageRacket extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
        
        </Text>
       <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/fakultet-76497.appspot.com/o/MaLongV5.jpg?alt=media&token=3d16c1d6-6a8e-44d7-bdd3-32755f97f127'}}
       style={{width: 224, height: 140}} />
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
    height: 140,
    width: 224
  }
});
