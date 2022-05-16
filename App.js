import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';

import BottomNavBar from './components/BottomNavBar';
import NewChallenges from './pages/NewChallenges';
import AcceptRejectChallenge from './pages/AcceptRejectChallenge';
import OngoingGames from './pages/OngoingGames';
import MatchResultVerification from './pages/MatchResultVerification';
import MatchResultVerification2 from './pages/MatchResultVerification2';


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <MatchResultVerification2/>
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
