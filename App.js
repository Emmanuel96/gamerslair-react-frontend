import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, SafeAreaProvider} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';

// components
import Header from './components/Header'
import BottomNavBar from './components/BottomNavBar';
// pages
import NewChallenges from './pages/NewChallenges';
import CreateChallenge from './pages/CreateChallenge';
import OngoingGames from './pages/OngoingGames';

const Stack = createNativeStackNavigator();

export default function App() {
  const [page, setPage] = useState('new_challenges');
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Header price='30' dp={require('./asset/images/dp.png')}/>
        <Stack.Navigator initialRouteName="new-challenges">
          {/* newChallenges page */}
          <Stack.Screen name="new-challenges"
            options={{headerShown:false}}
          >
            {(props) => <NewChallenges {...props} setPage={setPage} page={page}/>}
          </Stack.Screen>

          {/* ongoingGames page */}
          <Stack.Screen name="ongoing-games"
            options={{headerShown:false}}
          >  
            {(props) => <OngoingGames {...props} setPage={setPage}/>}
          </Stack.Screen>

          {/* createChallenge page */}
          <Stack.Screen name="create-challenge"
            options={{headerShown:false}}
          >  
            {(props) => <CreateChallenge {...props} setPage={setPage}/>}
          </Stack.Screen>
        </Stack.Navigator>
        <BottomNavBar page={page}/>
      </NavigationContainer>
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
