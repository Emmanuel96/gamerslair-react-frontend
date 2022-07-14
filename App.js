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
import Profile from './pages/Profile/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  const [page, setPage] = useState('new_challenges');
  const [authenticated, setAuthenticated] = useState(false);
  
  return (
    <SafeAreaView style={baseStyles.container}>
      <NavigationContainer>
        {authenticated && page != "profile" && <Header price='30' dp={require('./asset/images/dp.png')}/>}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="landing" component={Landing} />
          <Stack.Screen name="signin">
          {(props) => <SignIn {...props} setAuthenticated={setAuthenticated} authenticated={authenticated}/>}
          </Stack.Screen>
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="reset-password" component={ResetPassword} />
          <Stack.Screen name="new-challenges">
            {(props) => <NewChallenges {...props} setAuthenticated={setAuthenticated} authenticated={authenticated} setPage={setPage} page={page}/>}
          </Stack.Screen>
          <Stack.Screen name="ongoing-games">  
            {(props) => <OngoingGames {...props} setPage={setPage}/>}
          </Stack.Screen>
          <Stack.Screen name="create-challenge">  
            {(props) => <CreateChallenge {...props} setPage={setPage}/>}
          </Stack.Screen>
          <Stack.Screen name="profile">  
            {(props) => <Profile {...props} setPage={setPage}/>}
          </Stack.Screen>
        </Stack.Navigator>
        {authenticated && <BottomNavBar page={page}/>}
      </NavigationContainer>
    </SafeAreaView>
  );
}