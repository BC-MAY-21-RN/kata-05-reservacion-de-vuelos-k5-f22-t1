import {StyleSheet} from 'react-native';

export const buttonsStyles = StyleSheet.create({
  btnSignUp: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btnSignUpOpen: {
    backgroundColor: '#5D60F0',
  },
  btnSignUpGoogle: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 50,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  btnSignUpGoogleOpen: {
    backgroundColor: '#5D60F0',
  },
  txtBtn: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
  },
  imgGoogle: {
    height: 30,
    width: 30,
  },
  txtOr: {
    color: 'rgba(0,0,0,0.3)',
  },
  containerOr: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
