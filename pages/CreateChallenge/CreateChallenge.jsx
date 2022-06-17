import React, {useState, useCallback, useEffect} from 'react';
import {SafeAreaView, View, ScrollView, Alert} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useForm} from "react-hook-form";
import {HOST } from "@env"
import AsyncStorage from '@react-native-async-storage/async-storage';
import handleCreateChallenge from "../../helpers/challenges/handleCreateChallenge"

import styles from './styles'
import { baseStyles } from '../../style';

import PageTitleBar from '../../components/PageTitleBar'
import DropDown from '../../components/DropDown'
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';



export default function CreateChallenge(props) {
    const navigation = useNavigation()
    const [consoleOpen, setConsoleOpen] = useState(false);
    const [gameOpen, setGameOpen] = useState(false);
    const [recieverOpen, setRecieverOpen] = useState(false);
    const onConsoleOpen = useCallback(() => {
        setGameOpen(false);
        setRecieverOpen(false);
    }, []);
    const onGameOpen = useCallback(() => {
        setConsoleOpen(false);
        setRecieverOpen(false);
    }, []);
    const onRecieverOpen = useCallback(() => {
        setConsoleOpen(false);
        setGameOpen(false);
    }, []);

    const [consoleItems, setConsoleItems] = useState([
        {label: 'XBOX ONE', value: 'XBOX ONE'},
        {label: 'PS5', value: 'PS5'}
    ]);
    const [gameItems, setGameItems] = useState([
        {label: 'FIFA 22', value: 'FIFA 22'},
        {label: 'Elden Ring', value: 'Elden Ring'},
        {label: 'WWE 2k20', value: 'WWE 2k20'}
    ]);
    const [userItems, setUserItems] = useState([]);

    useFocusEffect(()=>{
        props.setPage('create_challenge')
    })
    useEffect( async ()=>{
        // fetch users
        try {
            const accessToken = await AsyncStorage.getItem('@accessToken')
            const user_id = await AsyncStorage.getItem('@user_id')
            if(accessToken == null) {
              props.setAuthenticated(false)
              navigation.navigate('signin', { name: 'signin' })
            }
            axios.get(`${HOST}/api/auth/fetch_all`,
                {
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                    }
                }
            ).then(response =>{
                const userItem = response.data.reduce((result, user) =>{
                    if(user._id != user_id){
                        result.push( {label:user.username, value:user._id})
                    }
                    return result
                }, [])
                setUserItems(userItem)
            }).catch(error=>{
                console.log(error)
                alert('Unable to fetch users');
            })
          } catch(e) {
            alert(e)
            console.log(e)
          }
        
    },[])
    
    const { control, handleSubmit, formState: { errors } } = useForm({});
    
    const onSubmit = async data =>{
        await handleCreateChallenge(data).then(response =>{
            alert(`Challenge successfully sent to ${response.response.data.savedChallenge.reciever.username}`);
        }).catch(err =>{
            if(err == 'null_access'){
                props.setAuthenticated(false)
                navigation.navigate('signin', { name: 'signin' })
            }else{
                alert(err)
            }
        })        
    }

    return (
      <SafeAreaView style={baseStyles.container}>
        <PageTitleBar title='CREATE CHALLENGE'/>
        <ScrollView>
            <View style={styles.form}>
                <DropDown 
                    control={control}
                    name="console"
                    placeholder="Choose console"
                    
                    items={consoleItems}
                    setItems={setConsoleItems}
                    open={consoleOpen}
                    onOpen={onConsoleOpen}
                    setOpen={setConsoleOpen}
                    zIndex={3000}
                    zIndexInverse={1000}
                    style={[styles.form_field]}
                />
                {/* {errors.firstName && <Text>This is required.</Text>} */}
                
                <DropDown
                    control={control}
                    name="game"
                    placeholder="Choose game"

                    items={gameItems}
                    setItems={setGameItems}
                    open={gameOpen}
                    onOpen={onGameOpen}
                    setOpen={setGameOpen}
                    zIndex={2000}
                    zIndexInverse={2000}
                    style={[styles.form_field]}
                />
                
                <CustomTextInput
                    control={control}
                    name="bet_amount"
                    placeholder="Bet Amount:"
                    style={[styles.form_field]}
                />
                <DropDown
                    control={control}
                    name="reciever_id"
                    placeholder="Search for player to invite:"

                    items={userItems}
                    setItems={setUserItems}
                    open={recieverOpen}
                    onOpen={onRecieverOpen}
                    setOpen={setRecieverOpen}
                    zIndex={5000}
                    zIndexInverse={4000}
                    style={[styles.form_field]}
                />
                <CustomTextInput
                    control={control}
                    name="rules"
                    placeholder="Special rules:"
                    style={[styles.form_field, {minHeight:100}]}
                    numberOfLines={10}
                    multiline={true}
                />
                <View style={{alignSelf:'center'}}>
                    <CustomButton
                        title='CREATE'
                        color="#fff"
                        onPress={handleSubmit(onSubmit)}
                    />
                </View>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
}