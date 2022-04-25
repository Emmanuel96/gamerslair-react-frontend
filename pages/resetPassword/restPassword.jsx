import React from "react"
import { StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native';

export default function ResetPassword(){
  return(
    <React.Fragment>
      <View style={styles.mainContainer}>
        <Text style={styles.textLogo}>GamersLAIR</Text>

        <View style={[styles.card, styles.containerBox, styles.shadowProp, {marginTop: 70}]}>
          <Text style={{fontSize: 18, textAlign: 'center', fontWeight: 'bold', color: '#747070'}}>
            Enter the email you used in creating your GamersLair account. We’ll send you instructions to reset your password.
          </Text>
        </View>

        <View style={[styles.container]}>
          <TextInput style={[styles.usernameInput, styles.shadowProp]} placeholder={'Email Address'}/>
        </View>

        <View style={{}}>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', textAlign: 'center', paddingVertical: 13, fontSize: 18}}>
              Send
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto', marginTop: 260}}>
          <Text>I remember now!</Text>
          <Text style={{marginLeft: 10, color: '#E5B300'}}>Go back!</Text>
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