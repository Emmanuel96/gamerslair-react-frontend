import React, { useState } from "react"
import styles from "./styles";
import { useNavigation } from '@react-navigation/native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import handleSignup from "../../helpers/handleSignup";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native';

export default function SignUp(){
  const navigation = useNavigation()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signup = () => handleSignup(username, email, password)

  return(
    <View style={styles.body}>
      <View style={styles.mainContainer}>
        <Text style={styles.textLogo}>GamersLAIR</Text>

        <Text style={styles.textSignUp}>Create Account</Text>

        <View style={styles.container}>
          <TextInput
            style={[styles.usernameInput, styles.shadowProp]}
            placeholder={'Username'}
            onChangeText={(val) => setUsername(val)}
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={[styles.usernameInput, styles.shadowProp]}
            placeholder={'Email Address'}
            onChangeText={(val) => setEmail(val)}
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={[styles.usernameInput, styles.shadowProp]}
            placeholder={'Password'}
            onChangeText={(val) => setPassword(val)}
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={[styles.usernameInput, styles.shadowProp]}
            placeholder={'Confirm Password'}
          />
        </View>

        <View style={styles.ageBox}>
          <BouncyCheckbox />
          <Text>I am 18 or above. I agree to the terms and ? Cookies policy</Text>
        </View>

        <View style={styles.signUpContainer}>
          <TouchableOpacity style={styles.button}>
            <Text
              onPress={signup}
              style={styles.signupText}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.haveAccount}>
          <Text>Already have an account?</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('signin', { name: 'signin' })}
            style={styles.signinTextContainer}>
            <Text style={styles.signinText}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}