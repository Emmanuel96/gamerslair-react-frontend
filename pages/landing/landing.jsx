import { StyleSheet, Text, View } from 'react-native';

export default function Landing(){
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