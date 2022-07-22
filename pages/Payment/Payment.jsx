import React, {useState, useEffect} from 'react';
import {TouchableOpacity,ScrollView, View, Text, Image, TextInput, Alert, Screen, Button} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation  } from '@react-navigation/native';
import { useConfirmPayment, CardField } from '@stripe/stripe-react-native';

import styles from './styles'
import { baseStyles } from '../../style';

import {createPaymentIntent, updateUserAccount} from '../../helpers/payment/paymentRequests';

import CustomButton from '../../components/CustomButton';
import { useUser, useSetUser} from "../../contexts/UserContext";

export default function Payment(props) {    
    const navigation = useNavigation();
    const user = useUser()
    const setUser = useSetUser()
    const {confirmPayment, loading} = useConfirmPayment();
    const [card, setCard] = useState(null);

    const [amount, setAmount] = useState();

    const handlePayPress = async () => {
        if (!card) {
            return;
        }

        const billingDetails = {
            email: user.email,
        };

        const {clientSecret} = await createPaymentIntent(amount)  
        const {paymentIntent, error} = await confirmPayment(clientSecret,  {
            type: 'Card',
            paymentMethodData: {
              billingDetails,
            }
        });
      
        if (error) {
            failureAlert(error.localizedMessage)
            console.log('Payment confirmation error', error);
        } else if (paymentIntent) {
            new_bal = await updateUserAccount(paymentIntent.amount/100)
            setUser(prevUser =>{
                prevUser.account_bal = new_bal
                return prevUser
            })
            successAlert((paymentIntent.amount/100))
            console.log('Success from promise', paymentIntent);
        }   
    };

    const failureAlert = (error) =>Alert.alert(
        'Payment failed!',
        `${error}`,
        [
            { text: "OK" }
        ]
    );
    const successAlert = (amount) =>Alert.alert(
        " Success!",
        `$${amount} has been successfully added to your Gamerslair account`,
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
                        value={user.email}
                    />
                </View> 
                <View style={styles.input_group}>
                    <Text style={[baseStyles.h6,styles.label]}>Amount - $</Text>
                    <TextInput
                        onChangeText={(val => setAmount(val))}
                        style={[styles.input, styles.shadowProp]}
                        keyboardType='decimal-pad'
                    />
                </View>
                <View style={styles.input_group}>
                    <Text style={[baseStyles.h6,styles.label]}>Card information</Text>
                    <CardField
                        postalCodeEnabled={false}
                        placeholders={{
                            number: '4242 4242 4242 4242',
                        }}
                        cardStyle={{
                            backgroundColor: '#FFFFFF',
                            textColor: '#000000',
                        }}
                        style={[{
                            width: '100%',
                            height: 50,
                        }, styles.shadowProp]}
                        onCardChange={setCard}
                        onFocus={(focusedField) => {
                        console.log('focusField', focusedField);
                        }}
                    />
                </View>
                
                <CustomButton
                    backgroundColor='#514C4C'
                    title='Proceed'
                    image_after={require('../../asset/icons/arrow-in-up.png')}
                    image_after_style={styles.button_icon}
                    color="#fff"
                    style={styles.proceed_button}
                    onPress={handlePayPress}
                    disabled={loading}
                />

            </View>
        </ScrollView>
    )
}