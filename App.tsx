import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from './screens/splashScreen'; 
import { Login } from './screens/login';
import { Main } from './screens/main';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={SplashScreen} 
          options={{ headerShown: false }}/>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}/>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}