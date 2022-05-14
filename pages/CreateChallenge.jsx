import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View,} from 'react-native';
// import {Dropdown } from 'react-native-material-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';

import Header from '../components/Header'
import PageTitleBar from '../components/PageTitleBar'
import DropDown from '../components/DropDown'



export default function CreateChallenge() {

    return (
      <SafeAreaView>
        {/* <Header price='30' dp={require('../asset/images/dp.png')}/> */}
        <PageTitleBar title='CREATE CHALLENGE'/>
        <View style={styles.form}>
            <DropDown 
                placeholder="Choose console"
                zIndex={3000}
                zIndexInverse={1000}
                style={[styles.form_field]}
            />
            <DropDown
                placeholder="Choose game"
                zIndex={2000}
                zIndexInverse={2000}
                style={[styles.form_field]}
            />
        </View>
        {/* <StatusBar style="auto" /> */}
      </SafeAreaView>
    );
  }


  const styles = StyleSheet.create({
      form:{
          width:'80%',
          marginVertical:'20%',
          alignSelf:'center',
      },
      form_field:{
          marginBottom:'13%',
      },
  })