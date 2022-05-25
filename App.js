import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Landing from './pages/landing/landing'
import SignIn from './pages/signin/signin'
import SignUp from './pages/signup/signup'
import ResetPassword from './pages/resetPassword/restPassword'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="landing" component={Landing} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="reset-password" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}