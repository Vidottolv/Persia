import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RootStackParamList } from "../App";


export const Main: 
    React.FC<NativeStackScreenProps<RootStackParamList, 'Main'>> = (
        { navigation }) => {
    return(
        <View>
            <Text> MAIN </Text>
        </View>
    )
}