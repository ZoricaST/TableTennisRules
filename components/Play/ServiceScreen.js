import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image } from 'react-native';
import Title from '../Title';
import Subtitle from '../Subtitle';
import TextBase from '../TextBase';

export default class SrviceScreen extends React.Component {
  render() {
    return (
     <ScrollView style={{ flex: 1, alignItems: 'center' }}>
       
        <Text> SrviceScreen</Text>
         <Title name='Table Tennis Rules – the Service' />
      

         <Subtitle name='2.6 THE SERVICE' />

 <TextBase name='2.6.1 Service shall start with the ball resting freely on the open palm of the server’s  stationary free hand.' />

 <TextBase name='2.6.2 The server shall then project the ball near vertically upwards, without imparting spin, so that it rises at least 16cm after leaving the palm of the free hand and then falls without touching anything before being struck.' />

<TextBase name='2.6.3 As the ball is falling the server shall strike it so that it touches first his or her court and then touches directly the receiver’s court; in doubles, the ball shall touch successively the right half court of server and receiver.' />

<TextBase name='2.6.4 From the start of service until it is struck, the ball shall be above the level of the playing surface and behind the server’s end line, and it shall not be hidden from the receiver by the server or his or her doubles partner or by anything they wear or carry.' />

 <TextBase name='2.6.5 As soon as the ball has been projected, the server’s free arm and hand shall be removed from the space between the ball and the net.
The space between the ball and the net is defined by the ball, the net and its indefinite upward extension.' />

 <TextBase name='2.6.6 It is the responsibility of the player to serve so that the umpire or the assistant umpire can be satisfied that he or she complies with the requirements of the
Laws, and either may decide that a service is incorrect.' />

 <TextBase name='2.6.6.1 If either the umpire or the assistant umpire is not sure about the legality of a service he or she may, on the first occasion in a match, interrupt play and warn the server; but any subsequent service by that player or his or her doubles partner which is not clearly legal shall be considered incorrect.' />

 <TextBase name='2.6.7 Exceptionally, the umpire may relax the requirements for a correct service where he or she is satisfied that compliance is prevented by physical
disability.' />

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

