import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';

import BottomNavBar from './components/BottomNavBar';
import NewChallenges from './pages/NewChallenges';


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <NewChallenges/>
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
});
