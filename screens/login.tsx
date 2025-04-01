import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import { RootStackParamList } from "../App";
import { useFonts, Montserrat_700Bold, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import InputText from "../components/InputText";
import { useState } from "react";
import ButtonCustom from "../components/button";


export const Login: 
    React.FC<NativeStackScreenProps<RootStackParamList, 'Login'>> = (
        { navigation }) => {
        const windowWidth = Dimensions.get('window').width;
        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');

        const [fontsLoaded] = useFonts({
          Montserrat_700Bold,
          Montserrat_500Medium,
        });
    
        if (!fontsLoaded ) {
          return null;
        }

    return (
            <View style={styles.mainContainer}>
                <View style={styles.containerTop}>
                    <Text style={styles.mainText}>Faça Login no App</Text>
                </View>
                <View style={styles.containerBottom}>
                    <InputText
                        label="Seu Nome"
                        placeholder="Insira seu nome"
                        placeholderColor="#FFF"
                        value={username}
                        onChangeText={setUsername}
                        width={windowWidth * 0.9}
                        height={60}
                        border
                        borderRadius={16}
                        borderWidth={2}
                        borderColor="#FFF"
                        focusBorderColor="#00A3FF"
                    />
                    <InputText
                        label="Insira sua Senha"
                        placeholder="*******"
                        placeholderColor="#FFF"
                        value={email}
                        onChangeText={setEmail}
                        width={windowWidth * 0.9}
                        height={60}
                        border
                        borderRadius={16}
                        borderWidth={2}
                        borderColor="#FFF"
                        focusBorderColor="#00A3FF"
                    />
                    <ButtonCustom
                        border
                        width={windowWidth * .9}
                        title="Entrar"
                        textColor="#FFF"
                        color="rgba(255, 45, 85, 0.8)"
                        onPress={() => navigation.navigate('Main') }/>
                    <View style={styles.rowgap}></View>
                    <View style={styles.viewButtons}>
                        <ButtonCustom
                            borderColor="#fff"
                            borderWidth={1}
                            border
                            width={windowWidth * .4}
                            title="Novo por aqui? Cadastre-se"
                            textColor="#FFF"
                            color="#1A1A1A"
                            onPress={() => ''}/>
                        <ButtonCustom
                            borderColor="#fff"
                            borderWidth={1}
                            border
                            width={windowWidth * .4}
                            title="Esqueci minha senha"
                            textColor="#FFF"
                            color="#1A1A1A"
                            onPress={() => ''}/>
                    </View>
                </View>
            </View> 
    );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:'#1A1A1A'
  },
  containerTop: {
    flex: 1,
    marginLeft:'5%',
    justifyContent: 'center',
  },
  containerBottom:{
    flex: 4,
    alignItems: 'center',
    rowGap:25
  },
  viewButtons: {
    flexDirection:'row',
    columnGap:10
  },
  mainText: {
    color: '#fff',
    fontSize: 24,
    marginTop: 5,
    fontFamily: 'Montserrat_500Medium',
  },
  subText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
    fontFamily: 'Montserrat_500Medium',
  },
  button:{
    width: '90%',
    height: 60,
    backgroundColor: 'rgba(255, 45, 85, 0.8)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent:'center',
    elevation:3
  },
  rowgap: {
    marginTop:10,
    width: Dimensions.get('window').width * 0.9,
    height:0.5,
    borderWidth:1,
    borderColor: '#FF9500'
  }
});