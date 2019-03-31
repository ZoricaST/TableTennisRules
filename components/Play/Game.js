import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image } from 'react-native';
import Title from '../Title';
import Subtitle from '../Subtitle';
import TextBase from '../TextBase';

export default class Game extends React.Component {
  render() {
    return (
     <ScrollView style={{ flex: 1, alignItems: 'center' }}>
       
        <Text>Game</Text>
         <Title name='Table Tennis Rules – A GAME' />
      

         <Subtitle name='2.11 A GAME' />

 <TextBase name='2.11.1 A game shall be won by the player or pair first scoring 11 points unless both players or pairs score 10 points, when the game shall be won by the first player or pair subsequently gaining a lead of 2 points.' />

 


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

