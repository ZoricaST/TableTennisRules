import React from 'react';
import { Button, View, Text ,StyleSheet,ScrollView ,ImageBackground } from 'react-native';
//import MyNavigator from './MyNavigator';
import { Constants } from 'expo';
import TableScreen from './components/Equipment/TableScreen';
import NetScreen from './components/Equipment/NetScreen';
import BallScreen from './components/Equipment/BallScreen';
import RacketScreen from './components/Equipment/RacketScreen';
import EquipmentScreen from './components/Equipment/EquipmentScreen';
import ServiceScreen from './components/Play/ServiceScreen';
import Return from './components/Play/Return';
import Order from './components/Play/Order';
import Let from './components/Play/Let';
import Point from './components/Play/Point';
import Game from './components/Play/Game';
//import Game from './components/Play/Game';
import Match from './components/Play/Match';
import Serving from './components/Play/Serving';
import Out from './components/Play/Out';
import Expedite from './components/Play/Expedite';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import TextBase from './components/TextBase';
import TitleF from './components/TitleF';
import PlayScreen from './components/Play/PlayScreen';
import Definitions from './components/Play/Definitions';
import ImageBall from './components/ImageBackground';
//import Header from './components/Header';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json


class HomeScreen extends React.Component {
  render() {
    return (
    
     <ImageBackground   source={{uri: 'https://firebasestorage.googleapis.com/v0/b/fakultet-76497.appspot.com/o/pogledS.jpg?alt=media&token=539ef76f-1895-4234-b160-fd750d41e76f'}}
       style={{width: '100%', height: '100%'}} >
         <ScrollView style={{ flex: 1, alignItems: 'center' }}>
        <Text></Text>
        
          <TitleF name='Table Tennis Rule'></TitleF>
              
       <Button
          title="Equipment"
          onPress={() => this.props.navigation.navigate('Equipment')}
        />
        <Text></Text>

<Button
          title="Play"
          onPress={() => this.props.navigation.navigate('Play')}
        />
        <Text> </Text>

     
      </ScrollView>
       </ImageBackground>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    
    Equipment: {
      screen: EquipmentScreen,
    },
    Play: {
      screen: PlayScreen,
    },
    Table: {
      screen: TableScreen,
    },
     Net: {
      screen: NetScreen,
    },
   Ball: {
      screen: BallScreen,
    },
    Racket: {
      screen: RacketScreen,
    },
    Service: {
      screen: ServiceScreen,
    },
    Return: {
      screen: Return,
    },
    Order: {
      screen: Order,
    },
    Let: {
      screen: Let,
    },
    Point: {
      screen: Point,
    },
    Game: {
      screen: Game,
    },
    Match: {
      screen: Match,
    },
    Definitions: {
      screen: Definitions,
    },
    Serving: {
      screen: Serving,
    },
    Out: {
      screen: Out,
    },
    Expedite: {
      screen: Expedite,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
  