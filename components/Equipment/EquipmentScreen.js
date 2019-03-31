import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image,ImageBackground } from 'react-native';
import Title from '../Title';
import Subtitle from '../Subtitle';
import TextBase from '../TextBase';
import ImageBall from './ImageBall';
import TitleF from '../TitleF';



export default class EquipmentScreen extends React.Component {
  render() {
    return (
      <ImageBackground   source={{uri: 'https://firebasestorage.googleapis.com/v0/b/fakultet-76497.appspot.com/o/pogledS.jpg?alt=media&token=539ef76f-1895-4234-b160-fd750d41e76f'}}
       style={{width: '100%', height: '100%'}} >
      <ScrollView style={{ flex: 1, alignItems: 'center' }}>
 
     <Text></Text>
        
          <TitleF name='Equipment'></TitleF>     

   <Text> </Text>
<Button
          title="THE TABLE"
          onPress={() => this.props.navigation.navigate('Table')}
        />
        <Text> </Text>

        <Button
          title="THE NET ASSEMBLY"
          onPress={() => this.props.navigation.navigate('Net')}
        />
        <Text> </Text>

         <Button
          title="The Ball"
          onPress={() => this.props.navigation.navigate('Ball')}
        />
        <Text> </Text>

        <Button
          title="Racket"
          onPress={() => this.props.navigation.navigate('Racket')}
        />
        <Text> </Text>

       
      </ScrollView>
       </ImageBackground>
    );
  }
}

