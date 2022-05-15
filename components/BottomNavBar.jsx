import React, {useEffect} from 'react';
import { StyleSheet, View, Image,TouchableOpacity} from 'react-native';
import { ShadowBox, NeomorphBox } from 'react-native-neomorph-shadows';  // https://www.npmjs.com/package/react-native-neomorph-shadows/v/0.0.8

import { baseStyles } from '../style';

export default function BottomNavBar(){
    return(
        <View style={[baseStyles.shadowProp, styles.bottomNavbar]}>
            <View style={[styles.navbar_inner]}>
                <TouchableOpacity style={[styles.navitem]}>
                    <ShadowBox
                        inner 
                        useSvg
                        style={{...styles.shadowBox, ...styles.active}}
                    >
                        <Image
                            source={require('../asset/icons/home.png')}
                            style={[styles.navicon]}
                        />
                    </ShadowBox>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navitem]}>
                    <ShadowBox
                        inner 
                        useSvg
                        style={styles.shadowBox}
                    >
                        <Image
                            source={require('../asset/icons/plus.png')}
                            style={[styles.navicon]}
                        />
                    </ShadowBox>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navitem]}>
                    <ShadowBox
                        inner 
                        useSvg
                        style={styles.shadowBox}
                    >
                        <Image
                            source={require('../asset/icons/gamepad.png')}
                            style={[styles.navicon]}
                        />
                    </ShadowBox>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    bottomNavbar:{
        backgroundColor:'#fff',
        position:'absolute',
        bottom:0,
        width:'100%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        shadowOffset:{width: -2, height: -4},
    },
    navbar_inner:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        overflow:'hidden',
        backgroundColor:'#fff',

    },
    navitem:{
        borderTopLeftRadius:20,
        borderTopRightRadius:20,    
    },
    shadowBox:{
        paddingTop:4,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        width:100,
        height:58,
        justifyContent:'center',
        alignItems:'center',
    },
    navicon:{
        width:30,
        height:30,
    },
    active:{
        backgroundColor:'rgba(229, 179, 0, 1)',
        shadowOffset: {width:0, height: 5},
        shadowOpacity: 0.7,
        shadowColor: "black",
        shadowRadius: 4,
        backgroundColor:'rgba(229, 179, 0, 1)',
    },

 })