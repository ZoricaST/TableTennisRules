import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class ImageNet extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
        
        </Text>
       <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/fakultet-76497.appspot.com/o/table-tennis-net-assembly-rules-300x202.jpg?alt=media&token=c0084096-2365-4e80-bae5-e5fe54798795'}}
       style={{width: 150, height: 101}} />
   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
  }
});
