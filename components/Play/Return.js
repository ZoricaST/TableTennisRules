import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image } from 'react-native';
import Title from '../Title';
import Subtitle from '../Subtitle';
import TextBase from '../TextBase';

export default class Return extends React.Component {
  render() {
    return (
     <ScrollView style={{ flex: 1, alignItems: 'center' }}>
       
        <Text> Return</Text>
         <Title name='Table Tennis Rules – the Return' />
      

         <Subtitle name='2.7 THE RETURN' />

 <TextBase name='2.7.1 The ball, having been served or returned, shall be struck so that it touches the opponent’s court, either directly or after touching the net assembly.' />

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

