import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image } from 'react-native';
import Title from '../Title';
import Subtitle from '../Subtitle';
import TextBase from '../TextBase';

export default class Expedite extends React.Component {
  render() {
    return (
     <ScrollView style={{ flex: 1, alignItems: 'center' }}>
       
        <Text>Expedite</Text>
         <Title name='Table Tennis Rules – THE EXPEDITE SYSTEM' />
      

         <Subtitle name='THE EXPEDITE SYSTEM' />

 <TextBase style={{ padding:15, fontWeight: 'bold'}} name='2.15.1 Except as provided in 2.15.2, the expedite system shall come into operation after 10 minutes’ play in a game or at any time when requested by both players or pairs.' />

 <TextBase name='2.15.2 The expedite system shall not be introduced in a game if at least 18 points
have been scored.' />

 <TextBase name='2.15.3 If the ball is in play when the time limit is reached and the expedite system is
due to come into operation, play shall be interrupted by the umpire and shall
resume with service by the player who served in the rally that was interrupted;
if the ball is not in play when the expedite system comes into operation, play
shall resume with service by the player who received in the immediately
preceding rally.' />

 <TextBase name='2.15.4 Thereafter, each player shall serve for 1 point in turn until the end of the
game, and if the receiving player or pair makes 13 correct returns in a rally the
receiver shall score a point.' />

<TextBase name='2.15.5 Introduction of the expedite system shall not alter the order of serving and
receiving in the match, as defined in 2.13.6.' />

<TextBase name='2.15.6 Once introduced, the expedite system shall remain in operation until the end
of the match.' />


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

