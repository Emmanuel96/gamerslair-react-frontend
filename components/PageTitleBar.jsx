import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { baseStyles } from '../style';

export default function PageTitleBar(props){
    return(
        <View style={[baseStyles.shadowProp, styles.bar]}>
            <Text style={[baseStyles.bold, baseStyles.textShadowProp, baseStyles.customColor]}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   bar:{
        backgroundColor:'#fff',
       alignItems:'center',
       paddingVertical: '3%',
       marginBottom: '2%',
   }
})