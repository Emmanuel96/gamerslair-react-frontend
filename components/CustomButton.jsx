import React, {useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

import { baseStyles } from '../style';

export default function CustomBotton(props){
    return(
        <TouchableOpacity
            onPress={props.onPress}
            style={[{ 
                backgroundColor:props.backgroundColor||'rgba(229, 179, 0, 1)'
            },styles.button, props.style]}
        >
            {props.image !== undefined &&
                <Image source={props.image} style={[{marginHorizontal:10, width:32,height:32,}]}/>
            }
            <Text style={[baseStyles.h6, props.textStyle, {color:props.color||'#000',}]}>{props.title}</Text>
            {props.image_after !== undefined &&
                <Image source={props.image_after} style={[{marginHorizontal:10, width:32,height:32,}, props.image_after_style]}/>
            }
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button:{
        borderRadius:5,
        paddingHorizontal:13,
        paddingVertical:10,
        flexDirection:'row',
        alignSelf:'flex-start',
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'#171717',
        shadowOffset:{width: 0, height: 0},
        shadowOpacity:0.4,
        shadowRadius:2,
        elevation: 20,
    }
})