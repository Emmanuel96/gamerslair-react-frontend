import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  signupText: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 13,
    fontSize: 18
  },

  signinText: {
    color: '#E5B300',
    marginLeft: 10
  },

  haveAccount: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 70
  },

  signUpContainer: {
    marginTop: 20
  },

  body: {
    height: "100%",
    backgroundColor: 'white'
  },

  ageBox: {
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20
  },

  mainContainer: {
    backgroundColor: 'white',
  },

  textLogo: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#E5B300'
  },

  textSignUp: {
    textAlign: 'center',
    color: '#514C4C',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 50
  },

  usernameInput: {
    height: '100%',
    paddingLeft: 15,
    backgroundColor: 'white',
  },

  container: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    height: 55,
    borderRadius: 5,
  },

  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  button: {
    height: 50,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 5,
    backgroundColor: '#E5B300',
  }
});