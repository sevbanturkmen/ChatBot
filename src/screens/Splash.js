import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/splash';
const splash = require('../assets/splash.png');
class Splash extends Component {
  navigation = this.props.navigation;

  render() {
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    return (
      <View style={{flex: 1}}>
        <ImageBackground source={splash} style={{flex: 1}}>
          <View style={{width: width, height: height, alignItems: 'center'}}>
            <View style={styles.logoView}>
              <Text style={styles.logoText}>LOGO</Text>
            </View>
            <View style={styles.bottomView}>
              <Text style={styles.infoText}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              </Text>
              <TouchableOpacity
                onPress={() => this.navigation.navigate('Chat')}
                style={styles.button}>
                <Text style={styles.buttonText}>GİRİŞ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default Splash;
