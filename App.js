import React, {useState, createContext} from 'react';
import { SafeAreaView} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
import Payment from './pages/Payment/Payment';

import { AuthContext, SetAuthContext} from './contexts/AuthContext';
import { UserContextProvider } from './contexts/UserContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const [auth, updateAuth] = useState(false)
  const [page, setPage] = useState('new_challenges');
  const [authenticated, setAuthenticated] = useState(false);

  function setAuth(new_auth){
    updateAuth(new_auth)
  }
  
  return (
    <AuthContext.Provider value={auth}>
    <SetAuthContext.Provider value={setAuth}>
    <UserContextProvider>
    <SafeAreaView style={baseStyles.container}>
      <NavigationContainer>
        {auth && page != "profile" && <Header price='30' dp={require('./asset/images/dp.png')}/>}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="landing" component={Landing} />
          <Stack.Screen name="signin">
          {(props) => <SignIn {...props}/>}
          </Stack.Screen>
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="reset-password" component={ResetPassword} />
          <Stack.Screen name="new-challenges">
            {(props) => <NewChallenges {...props} setPage={setPage} page={page}/>}
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
          <Stack.Screen name="payment">  
            {(props) => <Payment {...props} setPage={setPage}/>}
          </Stack.Screen>
        </Stack.Navigator>
        {auth && <BottomNavBar page={page}/>}
      </NavigationContainer>
    </SafeAreaView>
    </UserContextProvider>
    </SetAuthContext.Provider>
    </AuthContext.Provider>
  );
}