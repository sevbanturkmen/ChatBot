import React, {Component} from 'react';
import styles from '../styles/header.js';
import {View, Image, TouchableOpacity, Text} from 'react-native';

const back = require('../assets/backIcon.png');
const menu = require('../assets/menuIcon.png');

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Image source={back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerLogoText}>LOGO</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Settings')}
          style={styles.settingsButton}>
          <Image source={menu} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default Header;
