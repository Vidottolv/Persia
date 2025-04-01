import React from "react";
import { View,Text,StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Montserrat_700Bold, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

export const SplashScreen: 
  React.FC<NativeStackScreenProps<RootStackParamList, 'Home'>> = (
    { navigation }) => {

    const [fontsLoaded] = useFonts({
      Montserrat_700Bold,
      Montserrat_500Medium,
    });

    if (!fontsLoaded ) {
      return null;
    }

    return (
      <LinearGradient
        colors={['#00A3FF', '#7B00FF']}
        style={styles.splashContainer}> 
        <View style={styles.splashContainer}>
          <View style={styles.containerTop}>
            <Text style={styles.mainText}>
              Seu Personal
            </Text>
            <Text style={styles.mainText}>
              Trainer IA
            </Text>
            <Text style={styles.subText}>
              Treine melhor com análises inteligentes
            </Text>
            <Image style={styles.image}
              source={require('../assets/startimg.png')}/>
          </View>
          <View style={styles.containerBottom}>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Login')}
              style={styles.button}>
              <Text style={styles.buttonText}>
                Começar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  };
  

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
  },
  containerTop: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBottom:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    color: '#fff',
    fontSize: 32,
    marginTop: 5,
    fontFamily: 'Montserrat_700Bold',
  },
  subText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
    fontFamily: 'Montserrat_500Medium',
  },
  buttonText: {
    color: '#E0E0E0',
    fontSize: 24,
    fontFamily: 'Montserrat_500Medium'
  },
  image: {
    width:300,
    height:300
  },
  button:{
    width: '90%',
    height: 60,
    backgroundColor: 'rgba(255, 45, 85, 0.8)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent:'center',
    elevation:3
  }
});