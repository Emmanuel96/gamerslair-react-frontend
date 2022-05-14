import React, {useState, useCallback} from 'react';
import {StyleSheet, SafeAreaView, View,} from 'react-native';

import Header from '../components/Header'
import PageTitleBar from '../components/PageTitleBar'
import DropDown from '../components/DropDown'
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';



export default function CreateChallenge() {
    const [consoleOpen, setConsoleOpen] = useState(false);
    const [gameOpen, setGameOpen] = useState(false);

    const onConsoleOpen = useCallback(() => {
        setGameOpen(false);
    }, []);

    const onGameOpen = useCallback(() => {
        setConsoleOpen(false);
    }, []);

    return (
      <SafeAreaView>
        <Header price='30' dp={require('../asset/images/dp.png')}/>
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
        {/* <StatusBar style="auto" /> */}
      </SafeAreaView>
    );
  }


  const styles = StyleSheet.create({
      form:{
          width:'80%',
          marginTop:'10%',
          marginBottom:'20%',
          alignSelf:'center',
      },
      form_field:{
          marginBottom:'13%',
      },
  })