import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
const avatar = require('../assets/avatar.png');

class Text2 extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Image source={avatar} style={{height: 60, width: 60}} />
        <View
          style={{
            width: '70%',
            backgroundColor: '#eeecf3',
            borderRadius: 20,
          }}>
          <View style={{padding: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Bot</Text>
            <Text style={{marginTop: 5}}>lorem</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Text2;
