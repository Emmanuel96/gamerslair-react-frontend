import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useNavigation  } from '@react-navigation/native';
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
  
import {baseStyles} from '../../style'

import { useUser} from "../../contexts/UserContext";

export default function Hero(props){
    const navigation = useNavigation();

    const user = useUser()

    let [fontsLoaded] = useFonts({
        Rosario_700Bold,
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }

    return(
        <View style={styles.hero}>
            <View style={styles.hero_body}>
                <View style={styles.header}>
                    <Text style={styles.logo}>GamersLAIR</Text>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../asset/icons/dots-vertical.png')}
                            style={[baseStyles.dp]}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.profile_details}>
                        <Image
                            source={require('../../asset/images/dp.png')}
                            style={[baseStyles.dp, styles.user_photo]}
                        />
                        <View style={{flex:1}}>
                            <Text style={styles.profile_name}>@{user.username}</Text>
                            <Text style={styles.profile_email}>{user.email}</Text>
                        </View>
                </View>
            </View> 
            <View style={styles.account_ballance_tag}>
                <View style={styles.account_ballance_wrapper}>
                    <Text style={styles.account_ballance}>$30</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    hero_body:{
        backgroundColor: 'rgba(229, 179, 0, 1)',
    },
    header:{
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
    profile_details:{
        paddingHorizontal:'6%',
        paddingVertical:'7%',
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    user_photo:{
        width:140,
        height:140,
        borderRadius:50,
        marginRight: '7%'
    },
    profile_name:{
        color:'#fff',
        fontWeight: '800',
        fontSize: 24,
        paddingBottom: 5
    },
    profile_email:{
        color:'#fff',
        fontWeight: '600',
        fontSize: 16,
        paddingBottom: 5,
        paddingLeft:2,
    }, 
    account_ballance_tag:{
        backgroundColor: "#F2F1F6",
        padding: 6,
        alignSelf: 'flex-end',
        marginRight: '5%',
        marginTop: '-6%',
        borderRadius: 15,
    },
    account_ballance_wrapper:{
        backgroundColor: 'rgba(229, 179, 0, 1)',
        borderRadius: 12,
    },
    account_ballance:{
        paddingVertical: 7,
        paddingHorizontal: 26,
        fontSize: 20,
        fontWeight: '800',
        color: '#fff',
    }
})