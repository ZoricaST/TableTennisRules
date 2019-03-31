import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image } from 'react-native';
import Title from '../Title';
import Subtitle from '../Subtitle';
import TextBase from '../TextBase';
import ImageRacket from './ImageRacket';

export default class RacketScreen extends React.Component {
   render() {
    return (
      <ScrollView style={{ flex: 1, alignItems: 'center' }}>
 
         <Title name='Table Tennis Rules – the Racket' />
          <ImageRacket/>
         <Subtitle name='2.4 THE RACKET' />
 <TextBase name='2.4.1 The racket may be of any size, shape or weight but the blade shall be flat and
rigid.' />
 <TextBase name='2.4.2 At least 85% of the blade by thickness shall be of natural wood; an adhesive layer within the blade may be reinforced with fibrous material such as carbon  fibre, glass fibre or compressed paper, but shall not be thicker than 7.5% of the total thickness or 0.35mm, whichever is the smaller.' />

 <TextBase name='2.4.3 A side of the blade used for striking the ball shall be covered with either ordinary pimpled rubber, with pimples outwards  having a total thickness including adhesive of not more than 2.0mm, or sandwich rubber, with pimples inwards or outwards, having a total thickness including adhesive of not more than 4.0mm.' />

<TextBase name='2.4.3.1 Ordinary pimpled rubber is a single layer of non-cellular rubber, natural or synthetic, with pimples evenly distributed over its surface at a density of not less than 10 per cm² and not more than 30 per cm².' />

<TextBase name='2.4.3.2 Sandwich rubber is a single layer of cellular rubber covered with a single outer layer of ordinary pimpled rubber, the thickness of the pimpled rubber not being more than 2.0mm.' />

<TextBase name='2.4.4 The covering material shall extend up to but not beyond the limits of the blade, except that the part nearest the handle and gripped by the fingers may be left uncovered or covered with any material.' />
         
<TextBase name='2.4.5 The blade, any layer within the blade and any layer of covering material or adhesive on a side used for striking the ball shall be continuous and of even thickness.' />

<TextBase name='2.4.6 The surface of the covering material on a side of the blade, or of a side of the blade if it is left uncovered, shall be matt, bright red on one side and black on the other.' />

 <TextBase name='2.4.7 The racket covering shall be used without any physical, chemical or other treatment.' />

<TextBase name='2.4.7.1 Slight deviations from continuity of surface or uniformity of colour due to accidental damage or wear may be allowed provided that they do not significantly change the characteristics of the surface.' />

 <TextBase name='2.4.8 Before the start of a match and whenever he or she changes his or her racket during a match a player shall show his or her opponent and the umpire the racket he or she is about to use and shall allow them to examine it.' />



     
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
         <Text></Text>
     
      </ScrollView>
    );
  }
}