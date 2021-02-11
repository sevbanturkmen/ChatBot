import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import Header from '../components/Header';
import Text1 from '../components/Text1';
import Text2 from '../components/Text2';
import styles from '../styles/chat';
import {connect} from 'react-redux';
import {sendMessages, recieveMessage} from '../actions/message';
import _ from 'lodash';

const sendMessage = require('../assets/sendMessage.png');

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }
  navigation = this.props.navigation;

  sendMessage = () => {
    const {message} = this.state;
    var date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss a');
    var id = 1;
    sendMessages({message, date, id});
    this.recieve();
    this.textInput.clear();
  };

  recieve() {
    let message = 'lorem ipsum';
    var id = 2;
    return new Promise((resolve) => {
      setTimeout(() => {
        var date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss a');
        recieveMessage({date, message, id});
      }, 5000);
    });
  }

  // showRecievedMessages = () => {
  //   const {messageRecieved} = this.props;
  //   console.log(messageRecieved);
  //   return _.sortBy(messageRecieved, ['date']).map((item) => (
  //     <Text2 data={item.message} />
  //   ));
  // };

  showSentMessages = () => {
    const {messageSend} = this.props;
    console.log(messageSend);
    return _.sortBy(messageSend, ['date']).map((item) => {
      if (item.id == 1) {
        return <Text1 data={item.message} />;
      } else {
        return <Text2 data={item.message} />;
      }
    });
  };

  render() {
    const height = Dimensions.get('window').height;
    return (
      <View style={styles.mainView}>
        <Header navigation={this.props.navigation} />
        <ScrollView style={{height: height}}>
          <ScrollView
            ref={(scrollView) => {
              this.scrollView = scrollView;
            }}
            style={{height: height - 190}}>
            <Text2 data="loremelrkşelerl" />
            {this.showSentMessages()}
            {/* {this.showRecievedMessages()} */}
          </ScrollView>
          <View style={styles.typeTextView}>
            <TextInput
              onChangeText={(e) => this.setState({message: e})}
              style={styles.textInput}
              ref={(input) => {
                this.textInput = input;
              }}
            />
            <TouchableOpacity
              onPress={() => this.sendMessage()}
              style={styles.sendMessageButton}>
              <Image source={sendMessage} style={styles.sendMessageIcon} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    messageSend: state.message.messageSend,
    messageRecieved: state.message.messageRecieve,
  };
};
export default connect(mapStateToProps, {sendMessages, recieveMessage})(Chat);
