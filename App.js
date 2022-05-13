import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import AppLoading from 'expo-app-loading';
// import {
//   useFonts,
//   Rosario_700Black,
// } from '@expo-google-fonts/rosario';


import BottomNavBar from './components/BottomNavBar';
import NewChallenges from './pages/NewChallenges';


export default function App() {
  // let [fontsLoaded] = useFonts({
  //   Rosario_700Black,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View styles={styles.body}>
        <NewChallenges/>
      </View>
      <BottomNavBar/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  body:{
  },
});
