import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Modal from '../components/Modal';
import {
  feedingMethod,
  userType,
  applicationType,
  nurseInfo,
} from '../assets/data';
const x = require('../assets/x.png');
const pick = require('../assets/pick.png');
const phone = require('../assets/phone.png');
const nurse = require('../assets/nurse.png');

class Settings extends Component {
  navigation = this.props.navigation;
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalData: [],
      phoneNumber: 'HEMŞİRE SEÇİN',
      value: 'KULLANICI TİPİ SEÇİN',
      value1: 'BESLENME YÖNTEMİ EKLEYİN',
      value2: 'UYGULAMA ŞEKLİ SEÇİN',
      value3: '',
    };
  }

  callNurse = (id) => {
    const {phoneNumber} = this.state;
    if (id == 0) {
      if (phoneNumber !== '' && phoneNumber !== 'HEMŞİRE SEÇİN') {
        Linking.openURL(`tel:${this.state.phoneNumber}`);
      }
    } else {
      Linking.openURL(`tel:${'8888888888'}`);
    }
  };

  select = (id) => {
    switch (id) {
      case 0:
        this.setState({
          modalData: userType,
        });
        break;
      case 1:
        this.setState({
          modalData: feedingMethod,
        });
        break;
      case 2:
        this.setState({
          modalData: applicationType,
        });
        break;
      case 3:
        this.setState({
          modalData: nurseInfo,
        });
        break;
    }
    this.setState({
      showModal: true,
    });
  };
  _hideModal = () => {
    this.setState({showModal: !this.state.showModal});
  };

  getValue = (name, id, phoneNumber) => {
    switch (id) {
      case 0:
        this.setState({
          value: name,
        });
        break;
      case 1:
        this.setState({
          value1: name,
        });
        break;
      case 2:
        this.setState({
          value2: name,
        });
        break;
      case 3:
        this.setState({
          value3: name,
          phoneNumber: phoneNumber,
        });
        break;
    }
  };
  render() {
    const {showModal, modalData} = this.state;

    return (
      <View style={{backgroundColor: '#5b448f', flex: 1}}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 30,
                color: 'white',
                fontWeight: 'bold',
                marginTop: 10,
                alignSelf: 'center',
                marginRight: '30%',
              }}>
              LOGO
            </Text>
            <TouchableOpacity
              onPress={() => this.navigation.navigate('Chat')}
              style={{
                alignSelf: 'flex-end',
              }}>
              <Image
                source={x}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <View
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: 0.5,
                paddingBottom: 10,
                marginTop: 50,
              }}>
              <Text
                style={{color: 'white', fontWeight: 'bold', marginLeft: 10}}>
                KULLANICI VE BESLENME YÖNTEMLERİ
              </Text>
            </View>

            <View
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: 0.5,
                paddingBottom: 10,
                marginTop: 20,
                width: '90%',
                alignSelf: 'center',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={{color: 'white', fontSize: 11}}>
                    KULLANICI TİPİ
                  </Text>
                  <Text
                    style={{fontWeight: 'bold', color: 'white', fontSize: 16}}>
                    {this.state.value}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => this.select(0)}>
                  <Image source={pick} style={{height: 25, width: 25}} />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: 0.5,
                paddingBottom: 10,
                marginTop: 20,
                width: '90%',
                alignSelf: 'center',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={{color: 'white', fontSize: 11}}>
                    BESLENME YÖNTEMİ
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'white',
                      fontSize: 16,
                    }}>
                    {this.state.value1}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => this.select(1)}>
                  <Image source={pick} style={{height: 25, width: 25}} />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: 0.5,
                paddingBottom: 10,
                marginTop: 20,
                width: '90%',
                alignSelf: 'center',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={{color: 'white', fontSize: 11}}>
                    UYGULAMA ŞEKLİ
                  </Text>
                  <Text
                    style={{fontWeight: 'bold', color: 'white', fontSize: 16}}>
                    {this.state.value2}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => this.select(2)}>
                  <Image source={pick} style={{height: 25, width: 25}} />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: 0.5,
                paddingBottom: 10,
                marginTop: 50,
              }}>
              <Text
                style={{color: 'white', fontWeight: 'bold', marginLeft: 10}}>
                HEMŞİRE BİLGİLERİ
              </Text>
            </View>

            <View
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: 0.5,
                paddingBottom: 10,
                marginTop: 20,
                width: '90%',
                alignSelf: 'center',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={{color: 'white', fontSize: 11}}>
                    {this.state.value3}
                  </Text>
                  <Text
                    style={{fontWeight: 'bold', color: 'white', fontSize: 16}}>
                    {this.state.phoneNumber}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => this.select(3)}>
                  <Image source={pick} style={{height: 25, width: 25}} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => this.callNurse(0)}
                style={{
                  width: 250,
                  height: 50,
                  backgroundColor: '#AC3964',
                  borderRadius: 30,
                  borderWidth: 2,
                  borderColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 30,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <Image source={nurse} style={{width: 40, height: 40}} />
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  HEMŞİREYİ ARA
                </Text>
                <Image source={phone} style={{width: 40, height: 40}} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.callNurse(1)}
                style={{
                  width: 250,
                  height: 50,
                  backgroundColor: 'transparent',
                  borderRadius: 30,
                  borderWidth: 2,
                  borderColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                  flexDirection: 'row',
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  DESTEK HATTINI ARA
                </Text>
                <Image
                  source={phone}
                  style={{
                    width: 40,
                    height: 40,
                    position: 'absolute',
                    right: 10,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: '90%',
                alignItems: 'center',
                borderTopWidth: 0.5,
                borderTopColor: 'white',
                marginTop: 20,
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 20,
              }}>
              <Text style={{color: 'white', marginTop: 10}}>REFERANSLAR</Text>
              <Text style={{color: 'white', marginTop: 10}}>
                KULLANICI SÖZLEŞMESİ
              </Text>
            </View>
          </View>
          <Modal
            data={modalData}
            visible={showModal}
            dismiss={this._hideModal}
            get={this.getValue}
          />
        </ScrollView>
      </View>
    );
  }
}
export default Settings;
