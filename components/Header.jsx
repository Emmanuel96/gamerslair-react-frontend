import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { 
    useFonts,
    Rosario_300Light,
    Rosario_400Regular,
    Rosario_500Medium,
    Rosario_600SemiBold,
    Rosario_700Bold,
    Rosario_300Light_Italic,
    Rosario_400Regular_Italic,
    Rosario_500Medium_Italic,
    Rosario_600SemiBold_Italic,
    Rosario_700Bold_Italic 
  } from '@expo-google-fonts/rosario'

import {baseStyles} from '../style'

export default function Header(props){
    let [fontsLoaded] = useFonts({
        Rosario_700Bold,
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }

    return(
        <View style={styles.header}>
            <Text style={styles.logo}>GamersLAIR</Text>
            <View style={styles.header_right}>
                <Text style={styles.price}>${props.price}</Text>
                <Image 
                    source={props.dp}
                    style={[baseStyles.dp]}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   header:{
       backgroundColor: 'rgba(229, 179, 0, 1)',
       paddingHorizontal:'4%',
       paddingVertical:'3%',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between', 
   },
   logo:{ 
       color:'#fff',
       fontWeight: '800',
       fontFamily: 'Rosario_700Bold',
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