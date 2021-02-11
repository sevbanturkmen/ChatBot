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
    var id = 1;
    if (message == '') {
    } else {
      var date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss a');
      sendMessages({message, date, id});
      this.recieve();
      this.textInput.clear();
      this.setState({message: ''});
    }
  };

  recieve() {
    let message = '';
    let message1 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`;
    let message2 = `Contrary to popular belief, Lorem Ipsum is not simply random text.`;
    let message3 =
      'Thanks for considering me, I tried to do my best in one day I hope it was enough :)';
    let message4 = 'Lorem ipsum';
    var number = Math.floor(Math.random() * 5) + 0;
    console.log(number);
    if (number == 0) {
      message = message1;
    } else if (number == 1) {
      message = message2;
    } else if (number == 2) {
      message = message4;
    } else {
      message = message3;
    }
    var id = 2;
    setTimeout(() => {
      var date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss a');
      recieveMessage({date, message, id});
    }, 5000);
  }

  showSentMessages = () => {
    const {messageSend} = this.props;
    return _.sortBy(messageSend, ['date']).map((item, i) => {
      if (item.id == 1) {
        return <Text1 key={i} data={item.message} />;
      } else {
        return <Text2 key={i} data={item.message} />;
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
            onContentSizeChange={() => this.scrollView.scrollToEnd()}
            style={{height: height - 190}}>
            <Text2 data="Hoşgeldiniz, size nasıl yardımcı olabilirim?" />
            {this.showSentMessages()}
          </ScrollView>
          <View style={styles.typeTextView}>
            <TextInput
              placeholder="Bir şeyler yazın."
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
