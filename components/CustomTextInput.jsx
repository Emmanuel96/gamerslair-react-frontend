import React, {useEffect} from 'react';
import { StyleSheet, TextInput} from 'react-native';

import { baseStyles } from '../style';

export default function CustomTextInput(props){
    return(
        <TextInput
            placeholder={props.placeholder}
            style={[baseStyles.shadowProp, styles.textInput, props.style]}
        />
    )
}

const styles = StyleSheet.create({
   textInput:{
       height:50,
       borderRadius:10,
       padding:10,
   },
})