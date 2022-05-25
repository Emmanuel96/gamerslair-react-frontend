import React, { useState } from "react"
import { useNavigation } from '@react-navigation/native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import auth from '../../helpers/auth'

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native';

export default function SignIn(){
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignin = () => {
    const user = {
      email: email,
      password: password
    }
    auth.signin(user)
  }

  return(
    <View style={styles.body}>
      <View style={styles.mainContainer}>
        <Text style={styles.textLogo}>
          GamersLAIR
        </Text>

        <Text style={styles.textLogin}>
          Login to your Account
        </Text>

        <View style={styles.container}>
          <TextInput
            onChangeText={(val => setEmail(val))}
            style={[styles.usernameInput, styles.shadowProp]}
            placeholder={'Username or email'}
          />
        </View>

        <View style={styles.container}>
          <TextInput
            onChangeText={(val => setPassword(val))}
            style={[styles.usernameInput, styles.shadowProp]}
            placeholder={'Password'}
          />
        </View>

        <View style={styles.rememberMe}>
          <BouncyCheckbox />
          <Text>Remember me</Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={handleSignin}
            style={styles.button}
          >
            <Text style={styles.signinText}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.forgotPasswordContainer}>
          <Text>Forgot Password?</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('reset-password', { name: 'reset-password' })}
            style={styles.clickHereContainer}>
            <Text style={styles.clickHereText}>
              Click here
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noAccountText}>
          <Text>Don't have an account?</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('signup', { name: 'signup' })}
            style={styles.signupContainer}>
            <Text style={styles.color}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  color: {
    color: '#E5B300'
  },

  signupContainer: {
    marginLeft: 5,
    color: '#E5B300'
  },

  noAccountText: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 200
  },

  clickHereText: {
    color: '#E5B300'
  },

  clickHereContainer: {
    marginLeft: 5,
    color: '#E5B300'
  },

  body: {
    height: "100%",
    backgroundColor: 'white'
  },

  rememberMe: {
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20
  },

  forgotPasswordContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20
  },

  signinText: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 13,
    fontSize: 18
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

  textLogin: {
    textAlign: 'center',
    color: '#514C4C',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 70
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
})