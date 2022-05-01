import React from "react"
import { useNavigation } from '@react-navigation/native';
import { 
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  View, 
  TextInput 
} from 'react-native';

export default function SignIn(){
  const navigation = useNavigation()
  
  return(
    <React.Fragment>
      <View style={styles.mainContainer}>
        <Text style={styles.textLogo}>
          GamersLAIR
        </Text>

        <Text style={styles.textLogin}>
          Login to your Account
        </Text>

        <View style={styles.container}>
          <TextInput style={[styles.usernameInput, styles.shadowProp]} placeholder={'Username or email'}/>
        </View>

        <View style={styles.container}>
          <TextInput style={[styles.usernameInput, styles.shadowProp]} placeholder={'Password'}/>
        </View>

        <View style={{marginTop: 20}}>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', textAlign: 'center', paddingVertical: 13, fontSize: 18}}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto', marginTop: 20}}>
          <Text>Forgot Password?</Text>

          <TouchableOpacity 
            onPress={() => navigation.navigate('reset-password', { name: 'reset-password' })} 
            style={{marginLeft: 5, color: '#E5B300'}}>
            <Text style={{color: '#E5B300',}}>
              Click here
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto', marginTop: 270}}>
          <Text>Don't have an account?</Text>
          
          <TouchableOpacity 
            onPress={() => navigation.navigate('signup', { name: 'signup' })}
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

  textLogin: {
    textAlign: 'center',
    color: '#E5B300',
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
});