import React from "react"
import styles from "./styles"
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