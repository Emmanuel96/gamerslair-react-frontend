import React, {useState,useEffect} from 'react';
import {SafeAreaView,ScrollView, View, Text} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation  } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles'
import { baseStyles } from '../../style';
import handleFetchGameProfile from '../../helpers/games/handleFetchGameProfile';

import Hero from './Hero';
import CustomButton from '../../components/CustomButton';

import { useUser} from "../../contexts/UserContext";

export default function Profile(props) {
    const navigation = useNavigation();
    const user = useUser()
    const [gameProfile, setGameProfile] = useState(
        {total_games:'-', total_games_won:'-', total_ongoing_games:'-'}
    )

    useFocusEffect(()=>{
        props.setPage('profile')
    })

    useEffect(()=>{
        handleFetchGameProfile().then(response =>{
            setGameProfile(response.data)
          }).catch(err =>{
            if(err == 'null_access'){
                setAuth(false)
                navigation.navigate('signin', { name: 'signin' })
            }else{
                alert(`Unable to fetch game profile \n ${err}`)
                console.log(err)
            }
        })
    },[])

    return (
        <SafeAreaView>
            <ScrollView
                automaticallyAdjustContentInsets={true}
                contentContainerStyle={baseStyles.contentContainer}
            >
                <Hero></Hero>
                <View style={styles.user_game_details_box_outer}>
                    <View style={styles.user_game_details_box_inner}>
                        <View style={styles.list_item}>
                            <Text style={[baseStyles.customColor,styles.list_item_left]}>Total no. of games</Text>
                            <Text style={[baseStyles.customColor,styles.list_item_right]}>{gameProfile.total_games}</Text>
                        </View>
                        <View style={styles.list_item}>
                            <Text style={[baseStyles.customColor,styles.list_item_left]}>No. of games won</Text>
                            <Text style={[baseStyles.customColor,styles.list_item_right]}>{gameProfile.total_games_won}</Text>
                        </View>
                        <View style={styles.list_item}>
                            <Text style={[baseStyles.customColor,styles.list_item_left]}>No. of ongoing games</Text>
                            <Text style={[baseStyles.customColor,styles.list_item_right]}>{gameProfile.total_ongoing_games}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.user_account_ballance_box_outer}>
                    <View style={styles.user_account_ballance_box_inner}>
                        <View style={styles.account_list_item}>
                            <Text style={[baseStyles.customColor,styles.account_list_item_left]}>Account Ballance</Text>
                            <Text style={[baseStyles.customColor,styles.account_list_item_right]}>${user.account_bal}</Text>
                        </View>
                        <CustomButton
                            title='Fund Account'
                            image_after={require('../../asset/icons/arrow-in-left.png')}
                            image_after_style={styles.button_icon}
                            color="#fff"
                            style={styles.fund_button}
                            onPress={() =>navigation.navigate('payment')}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}