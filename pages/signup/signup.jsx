import React, { useState } from "react"
import { useNavigation } from '@react-navigation/native'
import auth from "../../services/auth"
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
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignup = () => {
    const data = {
      username: username,
      email: email,
      password: password
    }
    console.log(data)
    auth.signup(data).then(res => {
      console.log(res)
    }).catch(error => console.log("Failed ", error))
  }

  return(
    <React.Fragment>
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
            onChangeText={(val) => setConfirmPassword(val)}
          />
        </View>

        <View style={{marginTop: 20}}>
          <TouchableOpacity style={styles.button}>
            <Text 
              onPress={handleSignup}
              style={{color: 'white', textAlign: 'center', paddingVertical: 13, fontSize: 18}}>
              CREATE ACCOUNT
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto', marginTop: 190}}>
          <Text>Already have an account?</Text>

          <TouchableOpacity 
            onPress={() => navigation.navigate('signin', { name: 'signin' })}
            style={{marginLeft: 5, color: '#E5B300'}}>
            <Text style={{color: '#E5B300',}}>
              Click here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  )
} 

const styles = StyleSheet.create({
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
    color: '#E5B300',
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