import React, {useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

import { baseStyles } from '../style';

export default function CustomBotton(props){
    return(
        <TouchableOpacity
            onPress={props.onPress}
            style={[{ 
                backgroundColor:props.backgroundColor||'rgba(229, 179, 0, 1)'
            },styles.button, props.styles]}
        >
            <Text style={[baseStyles.h6, {color:props.color||'#000',}]}>{props.title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button:{
        borderRadius:5,
        paddingHorizontal:13,
        paddingVertical:10,
        alignSelf:'flex-start',
        alignItems:'center',

    }
})