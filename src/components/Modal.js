import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
} from 'react-native';
const x = require('../assets/x.png');

class ModalComponent extends Component {
  select = (name, catID, phoneNumber) => {
    this.props.dismiss();
    this.props.get(name, catID, phoneNumber);
  };

  render() {
    const data = [{name: 'HASTA YAKINI'}, {name: 'A'}];
    const showModal = this.props.showModal;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => {
          this.props.dismiss();
        }}>
        <ScrollView
          style={{
            width: '80%',
            height: '64%',
            backgroundColor: 'gray',
            position: 'absolute',
            alignSelf: 'center',
            top: '15%',
            padding: 10,
          }}>
          <TouchableOpacity
            onPress={() => this.props.dismiss()}
            style={{alignSelf: 'flex-end'}}>
            <Image
              source={x}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </TouchableOpacity>
          {this.props.data.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                this.select(item.value, item.catID, item?.phoneNumber)
              }
              style={{
                width: '100%',
                minHeight: '5%',
                borderBottomColor: 'white',
                borderBottomWidth: 1,
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: 10,
                marginTop: 10,
              }}>
              <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                {item.value}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Modal>
    );
  }
}

export default ModalComponent;
