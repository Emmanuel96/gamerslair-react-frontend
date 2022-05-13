import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image,} from 'react-native';

import { baseStyles } from '../style';

import CustomButton from './CustomButton';

export default function Card(props){
    return(
        <View style={[baseStyles.shadowProp, styles.card]}>
            <View style={styles.card_heading}>
                <Text style={[baseStyles.h5, styles.game_title]}>FIFA 22 - XBOX ONE</Text>
                <Text style={[baseStyles.h5, styles.price]}>${props.price}</Text>
            </View>

            <View style={styles.card_body}>
                <Image 
                    source={props.user_dp}
                    style={[baseStyles.dp, styles.challenger_dp]}
                />
                <Text style={[baseStyles.h5]}>{props.user_name}</Text>
            </View>

            <View style={styles.card_footer}>
                <CustomButton
                    title='VIEW DETAILS'
                    color="#fff"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   card:{
        borderRadius: 8,
        width: '85%',
        alignSelf:'center',
        marginVertical: '7%',  
        paddingBottom: 15,
   },
   card_heading:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
   },
   game_title:{
       backgroundColor:'rgba(229, 179, 0, 1)',
       borderRadius: 8,
       overflow: 'hidden',
       paddingVertical:4,
       paddingHorizontal:10,
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
   card_footer:{
        alignSelf:'center',
   }
})