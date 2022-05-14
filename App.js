import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';

import BottomNavBar from './components/BottomNavBar';
import NewChallenges from './pages/NewChallenges';
import CreateChallenge from './pages/CreateChallenge';


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <CreateChallenge/>
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
