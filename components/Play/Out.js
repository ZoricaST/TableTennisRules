import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image } from 'react-native';
import Title from '../Title';
import Subtitle from '../Subtitle';
import TextBase from '../TextBase';

export default class Out extends React.Component {
  render() {
    return (
     <ScrollView style={{ flex: 1, alignItems: 'center' }}>
       
        <Text>Point</Text>
         <Title name='Table Tennis Rules –  OUT OF ORDER OF SERVING, RECEIVING OR ENDS' />
      

         <Subtitle name='2.14 OUT OF ORDER OF SERVING, RECEIVING OR ENDS' />

 <TextBase style={{ padding:15, fontWeight: 'bold'}} name='2.14.1 If a player serves or receives out of turn, play shall be interrupted by the umpire as soon as the error is discovered and shall resume with those playersserving and receiving who should be server and receiver respectively at the score that has been reached, according to the sequence established at the beginning of the match and, in doubles, to the order of serving chosen by the pair having the right to serve first in the game during which the error is discovered.' />

 <TextBase name='2.14.2 If the players have not changed ends when they should have done so, play shall be interrupted by the umpire as soon as the error is discovered and shall resume with the players at the ends at which they should be at the score that
has been reached, according to the sequence established at the beginning of the match.' />

 <TextBase name='2.14.3 In any circumstances, all points scored before the discovery of an error shall be reckoned.' />

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

