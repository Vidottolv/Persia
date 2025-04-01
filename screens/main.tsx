import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../App";

export const Main: 
    React.FC<NativeStackScreenProps<RootStackParamList, 'Main'>> = (
        { navigation }) => {
    return(
        <View style={styles.container}>
            <View style={{
                borderRadius:8, 
                width:'90%', 
                height:200, 
                backgroundColor:'#B0B7C0', 
                marginTop:10
                }}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A1A1A',
        flex:1,
        alignItems:'center',
    }
});