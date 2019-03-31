import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image } from 'react-native';
import Title from '../Title';
import Subtitle from '../Subtitle';
import TextBase from '../TextBase';

export default class Match extends React.Component {
  render() {
    return (
     <ScrollView style={{ flex: 1, alignItems: 'center' }}>
       
        <Text>Match</Text>
         <Title name='Table Tennis Rules – A MATCH' />
      

         <Subtitle name='2.12 A MATCH' />

 <TextBase name='2.12.1 A match shall consist of the best of any odd number of games.' />

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

