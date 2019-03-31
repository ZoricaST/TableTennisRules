import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image } from 'react-native';
import Title from '../Title';
import Subtitle from '../Subtitle';
import TextBase from '../TextBase';

export default class Serving extends React.Component {
  render() {
    return (
     <ScrollView style={{ flex: 1, alignItems: 'center' }}>
       
        <Text>Serving</Text>
         <Title name='Table Tennis Rules – Order' />
      

         <Subtitle name='2.13 THE ORDER OF SERVING, RECEIVING AND ENDS' />

 <TextBase name='2.13.1 The right to choose the initial order of serving, receiving and ends shall be decided by lot and the winner may choose to serve or to receive first or to start at a particular end.' />

 <TextBase name='2.13.2 When one player or pair has chosen to serve or to receive first or to start at a particular end, the other player or pair shall have the other choice.' />

<TextBase name='2.13.3 After each 2 points have been scored the receiving player or pair shall become the serving player or pair and so on until the end of the game, unless both players or pairs score 10 points or the expedite system is in operation,
when the sequences of serving and receiving shall be the same but each
player shall serve for only 1 point in turn.' />

 <TextBase name='2.13.4 In each game of a doubles match, the pair having the right to serve first shall choose which of them will do so and in the first game of a match the receiving pair shall decide which of them will receive first; in subsequent games of the match, the first server having been chosen, the first receiver shall be the player who served to him or her in the preceding game.' />

 <TextBase name='2.13.5 In doubles, at each change of service the previous receiver shall become the server and the partner of the previous server shall become the receiver.' />

<TextBase name='2.13.6 The player or pair serving first in a game shall receive first in the next game of the match and in the last possible game of a doubles match the pair due to receive next shall change their order of receiving when first one pair scores 5 points.' />

 <TextBase name='2.13.7 The player or pair starting at one end in a game shall start at the other end in the next game of the match and in the last possible game of a match the players or pairs shall change ends when first one player or pair scores 5 points.' />
  


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

