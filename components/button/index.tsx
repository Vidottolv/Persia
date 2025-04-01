import { Montserrat_500Medium, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { useFonts } from "expo-font";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";


type ButtonProps = {
    title: string;
    border?: boolean;
    borderWidth?: number;
    borderRadius?: number;
    borderColor?: string;
    textColor: string;
    width: number;
    color: string;    
    onPress: () => void;
}

export default function buttonCustom(props: ButtonProps) {
    const [fontsLoaded] = useFonts({
        Montserrat_700Bold,
        Montserrat_500Medium,
    });
    
    if (!fontsLoaded ) {
        return null;
    }
    const bordered = props.border
    ? { 
        borderWidth: props.borderWidth ?? 0, 
        borderRadius: props.borderRadius ?? 16, 
        borderColor: props.borderColor ?? '' 
    } : {};

    return (
            <TouchableOpacity style={[{ 
                height: 60, 
                justifyContent: "center", 
                alignItems:"center", 
                width:props.width,
                backgroundColor: props.color
                }, bordered]}
                onPress={props.onPress}>

                <Text style={{
                    color: props.textColor, 
                    fontFamily: 'Montserrat_500Medium'}}>
                        {props.title}
                </Text>
            </TouchableOpacity>
    );
}