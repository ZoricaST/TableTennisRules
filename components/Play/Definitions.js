import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image } from 'react-native';
import Title from '../Title';
import Subtitle from '../Subtitle';
import TextBase from '../TextBase';

export default class Definitions extends React.Component {
  render() {
    return (
     <ScrollView style={{ flex: 1, alignItems: 'center' }}>
       
        <Text>Definitions</Text>
         <Title name='Table Tennis Rules – Definitions' />
      

         <Subtitle name='2.5 DEFINITIONS' />

 <TextBase style={{ padding:15, fontWeight: 'bold'}} name='2.5.1 A rally is the period during which the ball is in play.' />

 <TextBase name='2.5.2 The ball is in play from the last moment at which it is stationary on the palm of
the free hand before being intentionally projected in service until the rally is
decided as a let or a point.' />

 <TextBase name='2.5.3 A let is a rally of which the result is not scored.' />

<TextBase name='2.5.4 A point is a rally of which the result is scored.' />

<TextBase name='2.5.5 The racket hand is the hand carrying the racket.' />

<TextBase name='2.5.6 The free hand is the hand not carrying the racket; the free arm is the arm ofthe free hand.' />

 <TextBase name='2.5.7 A player strikes the ball if he or she touches it in play with his or her racket, held in the hand, or with his or her racket hand below the wrist.' />

 <TextBase name='2.5.8 A player obstructs the ball if he or she, or anything he or she wears or carries, touches it in play when it is above or travelling towards the playing surface, not having touched his or her court since last being struck by his or her opponent.' />

<TextBase name='2.5.9 The server is the player due to strike the ball first in a rally.' />

<TextBase name='2.5.10 The receiver is the player due to strike the ball second in a rally.' />

<TextBase name='2.5.11 The umpire is the person appointed to control a match.' />

<TextBase name='2.5.12 The assistant umpire is the person appointed to assist the umpire with certain decisions.' />

<TextBase name='2.5.13 Anything that a player wears or carries includes anything that he or she was wearing or carrying, other than the ball, at the start of the rally.' />

<TextBase name='2.5.14 The end line shall be regarded as extending indefinitely in both directions.' />

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

