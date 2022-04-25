import React from "react"
import { StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native';

export default function SignUp(){
  return(
    <React.Fragment>
      <View style={styles.mainContainer}>
        <Text style={styles.textLogo}>GamersLAIR</Text>

        <Text style={styles.textSignUp}>Create Account</Text>

        <View style={styles.container}>
          <TextInput style={[styles.usernameInput, styles.shadowProp]} placeholder={'Username'}/>
        </View>

        <View style={[styles.container, {flexDirection: 'row', justifyContent: 'space-between'}]}>
          <View style={{width: 150}}>
            <TextInput style={[styles.usernameInput, styles.shadowProp, {width: '100%'}]} placeholder={'Firstname'}/>
          </View>

          <View style={{width: 150}}>
            <TextInput style={[styles.usernameInput, styles.shadowProp, {width: '100%'}]} placeholder={'Lastname'}/>
          </View>
        </View>

        <View style={styles.container}>
          <TextInput style={[styles.usernameInput, styles.shadowProp]} placeholder={'Email Address'}/>
        </View>

        <View style={styles.container}>
          <TextInput style={[styles.usernameInput, styles.shadowProp]} placeholder={'Password'}/>
        </View>

        <View style={[styles.container, {flexDirection: 'row', justifyContent: 'space-between'}]}>
          <View style={{width: 150}}>
            <TextInput style={[styles.usernameInput, styles.shadowProp, {width: '100%'}]} placeholder={'Date of Birth'}/>
          </View>

          <View style={{width: 150}}>
            <TextInput style={[styles.usernameInput, styles.shadowProp, {width: '100%'}]} placeholder={'Country'}/>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', textAlign: 'center', paddingVertical: 13, fontSize: 18}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto', marginTop: 100}}>
          <Text>Already have an account?</Text>
          <Text style={{marginLeft: 5, color: '#4355F9'}}>Sign In</Text>
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
    color: '#4355F9'
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
    backgroundColor: '#4355F9',
  }
});