import React, {useState,useEffect} from 'react';
import {TouchableOpacity,ScrollView, View, Text, Image, TextInput, Modal} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation  } from '@react-navigation/native';

import styles from './styles'
import { baseStyles } from '../../style';

import CustomButton from '../../components/CustomButton';
import DropDown from '../../components/DropDown'
import CustomTextInput from '../../components/CustomTextInput';

export default function Payment(props) {    
    const navigation = useNavigation();
    const [successAlert, setSuccessAlert] = useState(false);

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
            <Text style={[baseStyles.h5]}>Add your card details</Text>
            <View style={[styles.form]}>
                <View style={styles.input_group}>
                    <Text style={[baseStyles.h6,styles.label]}>Email</Text>
                    <TextInput
                        style={[styles.input, styles.shadowProp]}
                        editable={false}
                        value='royhibiscus@email.com'
                    />
                </View>
                <View style={styles.input_group}>
                    <Text style={[baseStyles.h6,styles.label]}>Card information</Text>
                    <TextInput
                        style={[styles.input, styles.shadowProp]}
                        keyboardType='number-pad'
                        textContentType='creditCardNumber'
                    />
                    <View style={[styles.input_half_length_container]}>
                        <TextInput
                            style={[styles.input, styles.shadowProp, styles.input_half_length]}
                            placeholder='MM/YY'
                            keyboardType='number-pad'
                        />
                        <TextInput
                            style={[styles.input, styles.shadowProp, styles.input_half_length]}
                            placeholder='CVC'
                            keyboardType='number-pad'
                        />
                    </View>
                </View>
                <View style={styles.input_group}>
                    <Text style={[baseStyles.h6,styles.label]}>Country or region</Text>
                    <TextInput
                        style={[styles.input, styles.shadowProp]}
                    />
                    <TextInput
                        style={[styles.input, styles.shadowProp]}
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
                    // onPress={() => setSuccessAlert(true)}
                />
                <Modal
                    animationType='fade'
                    visible={successAlert}
                    onRequestClose={() => {
                        navigation.navigate('profile');
                    }}
                >
                    <Text></Text>
                    <CustomButton
                        title='OK'
                        color="#fff"
                        style={styles.ok_button}
                        onPress={() => navigation.navigate('profile')}
                    />
                </Modal>
            </View>
        </ScrollView>
    )
}