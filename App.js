import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, SafeAreaProvider} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';

import { baseStyles } from './style';

import Landing from './pages/landing/landing'
import SignIn from './pages/signin/signin'
import SignUp from './pages/signup/signup'
import ResetPassword from './pages/resetPassword/restPassword'

import Header from './components/Header'
import BottomNavBar from './components/BottomNavBar';
import NewChallenges from './pages/NewChallenges/NewChallenges';
import CreateChallenge from './pages/CreateChallenge/CreateChallenge';
import OngoingGames from './pages/OngoingGames/OngoingGames';

const Stack = createNativeStackNavigator();

export default function App() {
  const [page, setPage] = useState('new_challenges');
  return (
    <SafeAreaView style={baseStyles.container}>
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
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="landing" component={Landing} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="reset-password" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
}