import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Landing(){
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('signin', { name: 'signin' })
    }, 3000)
  }, [])

  return(
    <View style={styles.container}>
      <Text style={styles.text}>GamersLAIR</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5B300',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 35,
    marginBottom: 140,
    fontWeight: 'bold',
  }
});