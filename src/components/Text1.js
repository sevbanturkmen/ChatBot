import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Text1 extends Component {
  render() {
    return (
      <View
        style={{
          width: '70%',
          backgroundColor: '#5b448f',
          borderRadius: 20,
          alignSelf: 'flex-end',
          marginTop: 20,
          marginRight: 20,
        }}>
        <View style={{padding: 20}}>
          <Text style={{marginTop: 5, color: 'white'}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor{' '}
          </Text>
        </View>
      </View>
    );
  }
}

export default Text1;