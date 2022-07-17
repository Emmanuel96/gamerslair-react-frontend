import React, { useState, useEffect} from "react"
import { useNavigation } from '@react-navigation/native'
import BouncyCheckbox from "react-native-bouncy-checkbox"
import handleSignin from "../../helpers/handleSignin"
import styles from './styles'
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native'
import {useAuth, useSetAuth } from '../../contexts/AuthContext';
import { useUser, useSetUser } from "../../contexts/UserContext";

export default function SignIn(){
  const navigation = useNavigation()
  const auth = useAuth()
  const setAuth = useSetAuth()
  const user = useUser()
  const setUser = useSetUser()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signin = async () => {
    handleSignin(email, password).then((data)=>{
      if(data){
        setUser(data.user)
        setAuth(data.success)
      }
    }).catch(err =>{
      alert(`Unable to login \n ${err}`)
      console.log(err)
    })
  }
  
  useEffect(()=>{
    if(auth){
      navigation.navigate('new-challenges', { name: 'new-challenges' })
    }
  },[auth])

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
            onPress={signin}
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