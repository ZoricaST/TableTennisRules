import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class TableImage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Local files and assets can be imported by dragging and dropping them into the editor
        </Text>
       <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/fakultet-76497.appspot.com/o/220px-Table_Tennis_Table_Blue.svg.png?alt=media&token=65d6065c-f440-46c4-8124-34f18038d7be'}}
       style={{width: 220, height: 120}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
