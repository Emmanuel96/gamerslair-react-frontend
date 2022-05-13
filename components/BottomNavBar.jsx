import React, {useEffect} from 'react';
import { StyleSheet, View, Image,} from 'react-native';

import { baseStyles } from '../style';

export default function BottomNavBar(){
    return(
        <View style={[baseStyles.shadowProp, styles.bottomNavbar]}>
            <View style={[styles.navbar_inner]}>
                <View style={[styles.navitem,  styles.active]}>
                    <Image
                        source={require('../asset/icons/home.png')}
                        style={[styles.navicon]}
                    />
                </View>
                <View style={[styles.navitem]}>
                    <Image
                        source={require('../asset/icons/plus.png')}
                        style={[styles.navicon]}
                    />
                </View>
                <View style={[styles.navitem]}>
                    <Image
                        source={require('../asset/icons/mail.png')}
                        style={[styles.navicon]}
                    />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    bottomNavbar:{
        position:'absolute',
        bottom:0,
        width:'100%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        shadowOffset:{width: -2, height: -5},
    },
    navbar_inner:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        overflow:'hidden',

    },
    navitem:{
        paddingHorizontal:40,
        paddingBottom:10,
        paddingTop:17,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,    
    },
    navicon:{
        width:30,
        height:30,
    },
    active:{
        backgroundColor:'rgba(229, 179, 0, 1)',
    },

 })