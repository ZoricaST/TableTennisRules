import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image } from 'react-native';
import Title from '../Title';
import Subtitle from '../Subtitle';
import TextBase from '../TextBase';

export default class Let extends React.Component {
  render() {
    return (
     <ScrollView style={{ flex: 1, alignItems: 'center' }}>
       
        <Text>Let</Text>
         <Title name='Table Tennis Rules – A Let' />
      

         <Subtitle name='2.9 A LET' />

 <TextBase style={{ padding:15, fontWeight: 'bold'}} name='2.9.1 The rally shall be a let:' />

 <TextBase name='2.9.1.1 if in service the ball touches the net assembly, provided the service is otherwise correct or the ball is obstructed by the receiver or his or her partner;' />

 <TextBase name='2.9.1.2 if the service is delivered when the receiving player or pair is not ready, provided that neither the receiver nor his or her partner attempts to strike the ball;' />

<TextBase name='2.9.1.3 if failure to make a service or a return or otherwise to comply with the Laws is due to a disturbance outside the control of the player;' />

<TextBase name='2.9.1.4 if play is interrupted by the umpire or assistant umpire;' />

<TextBase name='2.9.1.5 if the receiver is in wheelchair owing to a physical disability and in service the ball, provided that the service is otherwise correct,' />

 <TextBase name='2.9.1.5.1 after touching the receiver’s court returns in the direction of the net;' />

 <TextBase name='2.9.1.5.1 after touching the receiver’s court returns in the direction of the net;' />

<TextBase name='2.9.1.5.2 comes to rest on the receiver’s court;' />

<TextBase name='2.9.1.5.3 in singles leaves the receiver’s court after touching it by either of its sidelines.' />

<TextBase name='2.9.2 Play may be interrupted' />

<TextBase name='2.9.2.1 to correct an error in the order of serving, receiving or ends;' />

<TextBase name='2.9.2.2 to introduce the expedite system;' />

<TextBase name='2.9.2.3 to warn or penalise a player or adviser;' />

<TextBase name='2.9.2.4 because the conditions of play are disturbed in a way which could affect the outcome of the rally.' />

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

