import React, {useState,} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles'
import { baseStyles } from '../../style';

import NewChallengeCard from './NewChallengeCard';
import PageTitleBar from '../../components/PageTitleBar'



export default function NewChallenges(props) {
  useFocusEffect(()=>{
    props.setPage('new_challenges')
  })

  return (
    <SafeAreaView style={baseStyles.container}>
      <PageTitleBar title='NEW CHALLENGES'/>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
      >
        <NewChallengeCard price='30' user_name='Lewandowski' user_dp={require('../../asset/images/dp.png')} details='2 v 2: Best out of 3' />
        <NewChallengeCard price='100' user_name='Stephen' user_dp={require('../../asset/icons/user.png')} details='2 v 2: Best out of 3'/>
        <NewChallengeCard price='100' user_name='Stephen' user_dp={require('../../asset/icons/user.png')} details='2 v 2: Best out of 3'/>
        <NewChallengeCard price='100' user_name='Stephen' user_dp={require('../../asset/icons/user.png')} details='2 v 2: Best out of 3'/>
      </ScrollView>
    </SafeAreaView>
  );
}