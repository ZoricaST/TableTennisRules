import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image } from 'react-native';
import Title from '../Title';
import Subtitle from '../Subtitle';
import TextBase from '../TextBase';
import ImageNet from './ImageNet';

export default class NetScreen extends React.Component {
  render() {
    return (
    <ScrollView style={{ flex: 1, alignItems: 'center' }}>

     <Title name='Table Tennis Rules – the Net' />
         <ImageNet/>

         <Subtitle name='2.2 THE NET ASSEMBLY' />

         <TextBase name='2.2.1 The net assembly shall consist of the net, its suspension and the supporting posts, including the clamps attaching them to the table.

' />

<TextBase name='2.2.2 The net shall be suspended by a cord attached at each end to an upright post 15.25cm high, the outside limits of the post being 15.25cm outside the side line.' />

<TextBase name='2.2.3 The top of the net, along its whole length, shall be 15.25cm above the playing surface..' />

<TextBase name='2.2.4 The bottom of the net, along its whole length, shall be as close as possible to the playing surface and the ends of the net shall be attached to the supporting posts from top to bottom.' />
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
