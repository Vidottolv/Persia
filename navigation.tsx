import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View,Text,StyleSheet } from 'react-native';
// import DetailsScreen from './screens/DetailsScreen';

// Definindo os tipos das rotas
type RootStackParamList = {
  Home: undefined;
  Details?: { itemId: number };
};

// Criando o Stack Navigator
export const Stack = createNativeStackNavigator<RootStackParamList>();

// Componente da tela Home
const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Tela Inicial</Text>
    </View>
  );
};

// Componente principal do App
export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Página Inicial' }}
      />
      {/* <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{ title: 'Detalhes' }}
      /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});