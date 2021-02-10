import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

const x = require('../assets/x.png');
const pick = require('../assets/pick.png');

class Settings extends Component {
  navigation = this.props.navigation;
  render() {
    // const number = 555555555
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
                    HASTA YAKINI
                  </Text>
                </View>
                <TouchableOpacity>
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
                  <TouchableOpacity>
                    <Text style={{color: 'white', fontSize: 11}}>
                      BESLENME YÖNTEMİ
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: 16,
                      }}>
                      MİDE (PEG)
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
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
                    DAMLA
                  </Text>
                </View>
                <TouchableOpacity>
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
                    NAME SURNAME
                  </Text>
                  <Text
                    style={{fontWeight: 'bold', color: 'white', fontSize: 16}}>
                    (555) 555-5555
                  </Text>
                </View>
                <TouchableOpacity>
                  <Image source={pick} style={{height: 25, width: 25}} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
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
                }}>
                <Image />
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  HEMŞİREYİ ARA
                </Text>
                <Image />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 250,
                  height: 50,
                  backgroundColor: 'transparent',
                  borderRadius: 30,
                  borderWidth: 2,
                  borderColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  DESTEK HATTINI ARA
                </Text>
                <Image />
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
        </ScrollView>
      </View>
    );
  }
}
export default Settings;
