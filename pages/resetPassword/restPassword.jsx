import React from "react"
import { useNavigation } from '@react-navigation/native'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native'

export default function ResetPassword(){
  const navigation = useNavigation()

  return(
    <View style={styles.body}>
      <View style={styles.mainContainer}>
        <Text style={styles.textLogo}>GamersLAIR</Text>

        <Text style={styles.textForgotPass}>
          Forgot Password
        </Text>

        <View style={[styles.container]}>
          <TextInput style={[styles.usernameInput, styles.shadowProp]} placeholder={'Email Address'}/>
        </View>

        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.sendText}>
              Send
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rememberNowContainer}>
          <Text>I remember now!</Text>

          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
            <Text style={styles.goBackText}>
              Go back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  goBackText: {
    color: '#E5B300'
  },

  goBack: {
    marginLeft: 5,
    color: '#E5B300'
  },

  rememberNowContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30
  },

  sendText: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 13,
    fontSize: 18
  },

  body: {
    height: "100%",
    backgroundColor: 'white'
  },

  textForgotPass: {
    textAlign: 'center',
    color: '#514C4C',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 70
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

  usernameInput: {
    height: '100%',
    paddingLeft: 15,
    backgroundColor: 'white',
  },

  container: {
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    height: 55,
  },

  containerBox: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 35,
    paddingHorizontal: 25,
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