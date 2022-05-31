import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image,} from 'react-native';
import PropTypes from 'prop-types';

import { baseStyles } from '../style';

import CustomButton from './CustomButton';

export default function Card(props){
    return(
        <View style={[baseStyles.shadowProp, styles.card]}>
            <View style={styles.card_heading}>
                <Text style={[baseStyles.h5, baseStyles.textShadowProp, styles.game_title]}>{props.challenge.game} - {props.challenge.console}</Text>
                <Text style={[baseStyles.h5,baseStyles.textShadowProp, styles.price]}>${props.challenge.bet_amount}</Text>
            </View>

            <View style={styles.card_body}>
                <Image 
                    source={require('../asset/icons/user.png')}
                    style={[baseStyles.dp, styles.challenger_dp]}
                />
                <Text style={[baseStyles.h5, baseStyles.textShadowProp,]}>{props.challenge.sender.username}</Text>
            </View>
            
            <View style={styles.card_children}>
                {props.children}
            </View>
        </View>
    )
}
Card.defaultProps={
    challenge:{
        sender:{
            username:"_"
        },
        game:"_",
        console:"_",
        bet_amount:"_",

    }
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