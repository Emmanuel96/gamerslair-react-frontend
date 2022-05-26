import React, {useEffect} from 'react';
import { StyleSheet, TextInput} from 'react-native';
import { Controller } from "react-hook-form";

import { baseStyles } from '../style';

export default function CustomTextInput(props){
    return(
        <Controller
            control={props.control}
            name={props.name}
            rules={props.rule}
            render={({ field: {value, onChange, onBlur} }) => (
                <TextInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={props.secureTextEntry}
                    placeholder={props.placeholder}
                    style={[baseStyles.shadowProp, styles.textInput, props.style]}
                    numberOfLines={props.numberOfLines}
                    multiline={props.multiline}
                />
            )}      
        />
    )
}

const styles = StyleSheet.create({
   textInput:{
       minHeight:50,
       borderRadius:10,
       padding:10,
       backgroundColor:'#fff',
   },
})