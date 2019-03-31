import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image } from 'react-native';
import Title from '../Title';
import Subtitle from '../Subtitle';
import TextBase from '../TextBase';

export default class Out extends React.Component {
  render() {
    return (
     <ScrollView style={{ flex: 1, alignItems: 'center' }}>
       
        <Text> Order</Text>
         <Title name='Table Tennis Rules – The Order of Play' />
      

         <Subtitle name='2.8 THE ORDER OF PLAY' />

 <TextBase name='2.8.1 In singles, the server shall first make a service, the receiver shall then make a return and thereafter server and receiver alternately shall each make a return.' />

 <TextBase name='2.8.2 In doubles, except as provided in 2.8.3, the server shall first make a service, the receiver shall then make a return, the partner of the server shall then make a return, the partner of the receiver shall then make a return and thereafter each player in turn in that sequence shall make a return.' />

 <TextBase name='2.8.3 In doubles, when at least one player of a pair is in a wheelchair due to a physical disability, the server shall first make a service, the receiver shall then make a return but thereafter either player of the disabled pair may make returns. However, no part of a player’s wheelchair nor a foot of a standing player of this pair shall protrude beyond the imaginary extension of the centre line of the table. If it does, the umpire shall award the point to the opposing
pair.' />

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

