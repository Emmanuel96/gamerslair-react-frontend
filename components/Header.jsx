import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import baseStyles from '../style'

export default function Header(props){
    return(
        <View style={styles.header}>
            <Text style={styles.logo}>GamersLAIR</Text>
            <View style={styles.header_right}>
                <Text style={styles.price}>${props.price}</Text>
                <View style={{width: 40, height: 40, borderRadius: 50, overflow:'hidden'}} >
                    <Image 
                        source={props.dp}
                        style={{ width:'100%', height:'100%',}}
                    />
                </View>    
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   header:{
       backgroundColor: 'rgba(229, 179, 0, 1)',
       paddingHorizontal:'4%',
       paddingVertical:'3%',
       display: 'flex',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between', 
   },
   logo:{ 
       color:'#fff',
       fontWeight: '800',
    //    fontFamily: 'Rosario',
       fontSize: 26,
   },
   header_right:{
       display:'flex',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent:'space-between',
   },
   price:{
       color:'#fff',
       fontWeight: 'bold',
       fontSize: 18,
       marginRight: '2%'
   }
})