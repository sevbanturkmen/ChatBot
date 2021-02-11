import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  mainView: {
    height: '100%',
  },
  logoView: {
    marginTop: '20%',
  },
  logoText: {
    fontSize: 110,
    color: 'white',
    fontWeight: 'bold',
  },
  bottomView: {
    marginTop: '40%',
    width: '80%',
    alignItems: 'center',
  },
  infoText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#ac3964',
    marginTop: '25%',
    width: '75%',
    height: '20%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default styles;
