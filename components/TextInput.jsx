import React, {useEffect} from 'react';
import { StyleSheet, TextInput} from 'react-native';

import { baseStyles } from '../style';

export default function TextInput(props){
    return(
        <TextInput
            style={styles.textInput}
            defaultValue="Name me!"
        />
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