import { Montserrat_500Medium, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

type InputProps = {
    label: string;
    placeholder: string;
    placeholderColor: string;
    width: number;
    height: number;
    border: boolean;
    borderWidth?: number;
    borderRadius?: number;
    borderColor?: string;
    focusBorderColor?: string;
    value: string;
    onChangeText: (text: string) => void;
};

export default function InputText(props: InputProps) {
    const [isFocused, setIsFocused] = useState(false);
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
            borderRadius: props.borderRadius ?? 8, 
            borderColor: isFocused ? props.focusBorderColor ?? '#FFF' : props.borderColor ?? 'black', 
        } : {};

    return (
        <View style={{rowGap:5}}>
            <Text 
                style={{
                    marginLeft:10,
                    color:'#fff', 
                    fontSize:16, 
                    fontFamily:'Montserrat_500Medium'}}>
                    {props.label}
            </Text>
            <TextInput
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderColor}
                value={props.value}
                onChangeText={props.onChangeText}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={[{
                    width: props.width, 
                    height: props.height, 
                    color: props.placeholderColor,
                    paddingHorizontal: 15, 
                    fontFamily:'Montserrat_500Medium', 
                },bordered]}/>
        </View>
    );
}
