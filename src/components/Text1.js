import React, {Children, Component} from 'react';
import {View, Text} from 'react-native';

class Text1 extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            width: '65%',
            backgroundColor: '#5b448f',
            borderRadius: 20,
            alignSelf: 'flex-end',
            marginTop: 20,
            marginRight: 20,
          }}>
          <View style={{padding: 20}}>
            <Text style={{marginTop: 5, color: 'white'}}>
              {this.props.data}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Text1;
