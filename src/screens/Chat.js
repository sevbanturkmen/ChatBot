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
import Header from '../components/Header';
import Text1 from '../components/Text1';
import Text2 from '../components/Text2';
import styles from '../styles/chat';
import {sendMessages} from '../actions/message';

const sendMessage = require('../assets/sendMessage.png');

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {},
    };
  }
  navigation = this.props.navigation;

  async componentDidMount() {}

  sendMessage = () => {
    sendMessages();
  };

  render() {
    const {message} = this.state;
    console.log(message);
    const height = Dimensions.get('window').height;
    return (
      <View style={styles.mainView}>
        <Header navigation={this.props.navigation} />
        <ScrollView style={{height: height}}>
          <ScrollView style={{height: height - 190}}>
            <Text2 />
            <Text1 />
            <Text2 />
            <Text1 />
            <Text2 />
            <Text1 />
            <Text2 />
            <Text1 />
            <Text2 />
            <Text1 />
          </ScrollView>
          <View style={styles.typeTextView}>
            <TextInput
              onChangeText={(e) => this.setState({message: e})}
              style={styles.textInput}
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
    message: state.message.message,
  };
};
export default connect(mapStateToProps, {sendMessages})(Chat);
