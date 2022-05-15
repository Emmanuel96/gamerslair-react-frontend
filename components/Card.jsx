import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image,} from 'react-native';

import { baseStyles } from '../style';

import CustomButton from './CustomButton';

export default function Card(props){
    return(
        <View style={[baseStyles.shadowProp, styles.card]}>
            <View style={styles.card_heading}>
                <Text style={[baseStyles.h5, baseStyles.textShadowProp, styles.game_title]}>FIFA 22 - XBOX ONE</Text>
                <Text style={[baseStyles.h5,baseStyles.textShadowProp, styles.price]}>${props.price}</Text>
            </View>

            <View style={styles.card_body}>
                <Image 
                    source={props.user_dp}
                    style={[baseStyles.dp, styles.challenger_dp]}
                />
                <Text style={[baseStyles.h5, baseStyles.textShadowProp,]}>{props.user_name}</Text>
            </View>
            
            <View style={styles.card_children}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   card:{
        borderRadius: 2,
        width: '85%',
        alignSelf:'center',
        marginVertical: '7%',  
        paddingBottom: 15,
        backgroundColor:'#fff',
   },
   card_heading:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
   },
   game_title:{
       backgroundColor:'rgba(229, 179, 0, 1)',
       borderRadius: 7,
       overflow: 'hidden',
       paddingVertical:7,
       paddingHorizontal:'8%',
       alignSelf:'flex-start',
   },
   price:{
        right:10,
   },
   card_body:{
        marginVertical:20,
        paddingHorizontal:'3%',
        flexDirection:'row',
        alignItems:'center',
   },
   challenger_dp:{
       marginRight:'4%'
   },
   card_children:{
   }
})