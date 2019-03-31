import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image } from 'react-native';
import Title from '../Title';
import Subtitle from '../Subtitle';
import TextBase from '../TextBase';
import TableImage from './TableImage';


export default class TableScreen extends React.Component {
  render() {
    return (
     <ScrollView style={{ flex: 1, alignItems: 'center' }}>
  
         <Title name='Table Tennis Rules – the Table' />
        <TableImage/>
      <Subtitle name='2.1 THE TABLE' />
      <TextBase name='2.1.1 The upper surface of the table, known as the playing surface, shall be rectangular, 2.74m long and 1.525m wide, and shall lie in a horizontal plane 76cm above the floor.' />

       <TextBase name='2.1.2 The playing surface shall not include the vertical sides of the tabletop.' />

       <TextBase name='2.1.3 The playing surface may be of any material and shall yield a uniform bounce of about 23cm when a standard ball is dropped on to it from a height of 30cm.' />

        <TextBase name='2.1.4 The playing surface shall be uniformly dark coloured and matt, but with a white side line, 2cm wide, along each 2.74m edge and a white end line, 2cm wide, along each 1.525m edge.' />

         <TextBase name='2.1.5 The playing surface shall be divided into 2 equal courts by a vertical net running parallel with the end lines, and shall be continuous over the whole area of each court.' />

         <TextBase name='2.1.6 For doubles, each court shall be divided into 2 equal half-courts by a white centre line, 3mm wide, running parallel with the side lines; the centre line shall be regarded as part of each right half-court.' />
     
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