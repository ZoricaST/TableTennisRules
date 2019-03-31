import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image } from 'react-native';
import Title from '../Title';
import TitleF from '../TitleF';
import Subtitle from '../Subtitle';
import TextBase from '../TextBase';


export default class A extends React.Component {
  render() {
    return (
     <ScrollView style={{ flex: 1, alignItems: 'center' }}>
 <TitleF name='Table Tennis - Rules  Play' />
 <Text></Text>

        <Button
          title="Definitions"
          onPress={() => this.props.navigation.navigate('Definitions')}
        />
        <Text> </Text>
<Button
          title="THE SERVICE"
          onPress={() => this.props.navigation.navigate('Service')}
        />
        <Text> </Text>

        <Button
          title="THE RETURN"
          onPress={() => this.props.navigation.navigate('Return')}
        />
        <Text> </Text>

        <Button
          title="THE ORDER OF PLAY"
          onPress={() => this.props.navigation.navigate('Order')}
        />
        <Text> </Text>

         <Button
          title="A Let"
          onPress={() => this.props.navigation.navigate('Let')}
        />
        <Text> </Text>

         <Button
          title="A Point"
          onPress={() => this.props.navigation.navigate('Point')}
        />
        <Text> </Text>

        <Button
          title="A Match"
          onPress={() => this.props.navigation.navigate('Match')}
        />
        <Text> </Text>

         <Button
          title="A Game"
          onPress={() => this.props.navigation.navigate('Game')}
        />
        <Text> </Text>

        <Button
          title="The Order of Serving, Reciving and Ends"
          onPress={() => this.props.navigation.navigate('Serving')}
        />
        <Text> </Text>

        <Button
          title="OUT OF ORDER OF SERVING, RECEIVING OR ENDS"
          onPress={() => this.props.navigation.navigate('Out')}
        />
        <Text> </Text>

        <Button
          title="THE EXPEDITE SYSTEM"
          onPress={() => this.props.navigation.navigate('Expedite')}
        />
        <Text> </Text>

        <Text></Text>
    
      </ScrollView>
          
    );
  }
}
