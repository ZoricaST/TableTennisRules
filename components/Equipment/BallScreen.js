import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image } from 'react-native';
import Title from '../Title';
import Subtitle from '../Subtitle';
import TextBase from '../TextBase';
import ImageBall from './ImageBall';

export default class BallScreen extends React.Component {
  render() {
    return (
    <ScrollView style={{ flex: 1, alignItems: 'center' }}>

     <Title name='Table Tennis Rules – the Ball' />
         <ImageBall/>

         <Subtitle name='2.3 THE BALL' />

 <TextBase name='2.3.1 The ball shall be spherical, with a diameter of 40mm.' />

<TextBase name='2.3.2 The ball shall weigh 2.7g.' />

<TextBase name='2.3.3 The ball shall be made of celluloid or similar plastics material and shall be white or orange, and matt.' />

        <Text></Text>
   
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
         <Text></Text>

    </ScrollView>
     
    );
  }
}
