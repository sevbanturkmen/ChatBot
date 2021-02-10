import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  chatView: {},
  typeTextView: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopColor: 'gray',
    borderTopWidth: 1.5,
  },
  textInput: {
    marginTop: '4%',
    marginLeft: '5%',
    width: '80%',
    height: 50,
    backgroundColor: '#dedede',
    borderRadius: 30,
  },
  sendMessageButton: {},
  sendMessageIcon: {
    width: 50,
    marginTop: 15,
    height: 50,
  },
});

export default styles;
