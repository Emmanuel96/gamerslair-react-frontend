import React, {useState, useCallback,} from 'react';
import {StyleSheet, SafeAreaView, View,} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles'
import { baseStyles } from '../../style';

import PageTitleBar from '../../components/PageTitleBar'
import DropDown from '../../components/DropDown'
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';



export default function CreateChallenge(props) {
    useFocusEffect(()=>{
        props.setPage('create_challenge')
    })
    const [consoleOpen, setConsoleOpen] = useState(false);
    const [gameOpen, setGameOpen] = useState(false);

    const onConsoleOpen = useCallback(() => {
        setGameOpen(false);
    }, []);

    const onGameOpen = useCallback(() => {
        setConsoleOpen(false);
    }, []);

    return (
      <SafeAreaView style={baseStyles.container}>
        <PageTitleBar title='CREATE CHALLENGE'/>
        <View style={styles.form}>
            <DropDown 
                open={consoleOpen}
                onOpen={onConsoleOpen}
                setOpen={setConsoleOpen}
                placeholder="Choose console"
                zIndex={3000}
                zIndexInverse={1000}
                style={[styles.form_field]}
            />
            <DropDown
                open={gameOpen}
                onOpen={onGameOpen}
                setOpen={setGameOpen}
                placeholder="Choose game"
                zIndex={2000}
                zIndexInverse={2000}
                style={[styles.form_field]}
            />
            <CustomTextInput
                placeholder="Please enter game details:"
                style={[styles.form_field]}
            />
            <CustomTextInput
                placeholder="Enter Bet Amount:"
                style={[styles.form_field]}
            />
            <View style={{alignSelf:'center'}}>
                <CustomButton
                    title='CREATE CHALLENGE'
                    color="#fff"
                />
            </View>
        </View>
      </SafeAreaView>
    );
}
