import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image } from 'react-native';
import Title from '../Title';
import Subtitle from '../Subtitle';
import TextBase from '../TextBase';

export default class Point extends React.Component {
  render() {
    return (
     <ScrollView style={{ flex: 1, alignItems: 'center' }}>
       
        <Text>Point</Text>
         <Title name='Table Tennis Rules – A POINT' />
      

         <Subtitle name='2.10 A POINT' />

 <TextBase style={{ padding:15, fontWeight: 'bold'}} name='2.10.1 Unless the rally is a let, a player shall score a point' />

 <TextBase name='2.10.1.1 if an opponent fails to make a correct service;' />

 <TextBase name='2.10.1.2 if an opponent fails to make a correct return;' />

<TextBase name='2.10.1.3 if, after he or she has made a service or a return, the ball touches anything other than the net assembly before being struck by an opponent;' />

<TextBase name='2.10.1.4 if the ball passes over his or her court or beyond his or her end line without touching his or her court, after being struck by an opponent;' />

<TextBase name='2.10.1.5 if the ball, after being struck by an opponent, passes through the net or between the net and the net post or between the net and playing surface;' />

 <TextBase name='2.10.1.6 if an opponent obstructs the ball;' />

 <TextBase name='2.10.1.7 if an opponent deliberately strikes the ball twice in succession;' />

<TextBase name='2.10.1.8 if an opponent strikes the ball with a side of the racket blade whose surface does not comply with the requirements of 2.4.3, 2.4.4 and 2.4.5;' />

<TextBase name='2.10.1.9 if an opponent, or anything an opponent wears or carries, moves the playing surface;' />

<TextBase name='2.10.1.10 if an opponent, or anything an opponent wears or carries, touches the net assembly;' />

<TextBase name='2.10.1.11 if an opponent’s free hand touches the playing surface;' />

<TextBase name='2.10.1.12 if a doubles opponent strikes the ball out of the sequence established by the first server and first receiver;' />

<TextBase name='2.10.1.13 as provided under the expedite system (2.15.4).' />

<TextBase name='2.10.1.14 if both players or pairs are in a wheelchair due to a physical disability and' />

<TextBase name='2.10.1.14.1 his or her opponent does not maintain a minimum contact with the seat or cushion(s), with the back of the thigh, when the ball is struck;' />

<TextBase name='2.10.1.14.2 his or her opponent touches the table with either hand before striking the ball;' />

<TextBase name='2.10.1.14.3 his or her opponent’s footrest or foot touches the floor during play.' />

<TextBase name='2.10.1.15 as provided under the order of play (2.8.3).' />


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

