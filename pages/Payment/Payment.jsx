import React, {useState,useEffect} from 'react';
import {TouchableOpacity,ScrollView, View, Text, Image, TextInput, Alert, Modal} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation  } from '@react-navigation/native';

import styles from './styles'
import { baseStyles } from '../../style';

import CustomButton from '../../components/CustomButton';
import DropDown from '../../components/DropDown'
import CustomTextInput from '../../components/CustomTextInput';

export default function Payment(props) {    
    const navigation = useNavigation();

    const successAlert = () =>
    Alert.alert(
        "Account funding \n successfull!",
        "",
        [
            { text: "OK", onPress: () => navigation.navigate('profile') }
        ]
    );

    useFocusEffect(()=>{
        props.setPage('payment')
    })

    return(
        <ScrollView 
            style={[styles.body]}
            automaticallyAdjustContentInsets={true}
            contentContainerStyle={baseStyles.contentContainer}
        >
            <TouchableOpacity 
                style={[styles.back_arrow_wrapper]}
                onPress={() =>navigation.navigate('profile')}
            >
                <Image 
                    source={require('../../asset/icons/back.png')}
                    style={[styles.back_arrow]}
                />
            </TouchableOpacity>
            <View style={{flexDirection:'row'}}>
                <Text style={[baseStyles.h5]}>Pay with card </Text>
                <Image
                        source={require('../../asset/icons/credit-card.png')}
                        style={{left:10}}
                />
            </View>
            <View style={[styles.form]}>
                <View style={styles.input_group}>
                    <Text style={[baseStyles.h6,styles.label]}>Email</Text>
                    <TextInput
                        style={[styles.input, styles.shadowProp, styles.email_input]}
                        editable={false}
                        value='royhibiscus@email.com'
                    />
                </View>
                <View style={styles.input_group}>
                    <Text style={[baseStyles.h6,styles.label]}>Card information</Text>
                    <TextInput
                        style={[styles.input, styles.shadowProp, styles.input_multiple_top]}
                        keyboardType='number-pad'
                        textContentType='creditCardNumber'
                    />
                    <View style={[styles.input_half_length_container]}>
                        <TextInput
                            style={[styles.input, styles.shadowProp, styles.input_half_length_left, styles.input_multiple_bottom]}
                            placeholder='MM/YY'
                            keyboardType='number-pad'
                        />
                        <TextInput
                            style={[styles.input, styles.shadowProp, styles.input_half_length_rigth, styles.input_multiple_bottom]}
                            placeholder='CVC'
                            keyboardType='number-pad'
                        />
                    </View>
                </View>
                <View style={styles.input_group}>
                    <Text style={[baseStyles.h6,styles.label]}>Country or region</Text>
                    <TextInput
                        style={[styles.input, styles.shadowProp, styles.input_multiple_top]}
                    />
                    <TextInput
                        style={[styles.input, styles.shadowProp, styles.input_multiple_bottom]}
                        placeholder='ZIP'
                        keyboardType='number-pad'
                        textContentType='postalCode'
                    />
                </View>
                <View style={styles.input_group}>
                    <Text style={[baseStyles.h6,styles.label]}>Amount - $</Text>
                    <TextInput
                        style={[styles.input, styles.shadowProp]}
                        keyboardType='number-pad'
                    />
                </View>
                <CustomButton
                    backgroundColor='#514C4C'
                    title='Proceed'
                    image_after={require('../../asset/icons/arrow-in-up.png')}
                    image_after_style={styles.button_icon}
                    color="#fff"
                    style={styles.proceed_button}
                    onPress={successAlert}
                />
            </View>
        </ScrollView>
    )
}