import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';

import Header from '../components/Header'
import PageTitleBar from '../components/PageTitleBar'
import Card from '../components/Card'



export default function NewChallenges() {
    return (
      <SafeAreaView>
        <Header price='30' dp={require('../asset/images/dp.png')}/>
        <PageTitleBar title='NEW CHALLENGES'/>
        <ScrollView
          style={styles.scrollView} 
          contentContainerStyle={styles.contentContainer}
        >
            <Card price='30' user_name='Lewandowski' user_dp={require('../asset/images/pic.png')}/>
            <Card price='100' user_name='Stephen' user_dp={require('../asset/icons/user.png')}/>
            <Card price='100' user_name='Stephen' user_dp={require('../asset/icons/user.png')}/>
            <Card price='100' user_name='Stephen' user_dp={require('../asset/icons/user.png')}/>
        </ScrollView>
        {/* <StatusBar style="auto" /> */}
      </SafeAreaView>
    );
  }


  const styles = StyleSheet.create({
    contentContainer: {
      paddingBottom: 400,
    },
  })