import React, {useState,} from 'react';
import { SafeAreaView, ScrollView} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles'
import { baseStyles } from '../../style';

import PageTitleBar from '../../components/PageTitleBar'
import OngoingGamesCard from './OngoingGamesCard'


export default function OngoingGames(props) {
  useFocusEffect(()=>{
    props.setPage('ongoing_games')
  })
    return (
      <SafeAreaView style={baseStyles.container}>
        <PageTitleBar title='ONGOING GAMES'/>
        <ScrollView
          style={styles.scrollView} 
          contentContainerStyle={styles.contentContainer}
        >
            <OngoingGamesCard price='30' user_name='Lewandowski' user_dp={require('../../asset/images/dp.png')} details='2 v 2: Best out of 3'/>
            <OngoingGamesCard price='20' user_name='Stephen' user_dp={require('../../asset/icons/user.png')} details='1 v 1: Best out of 5'/>
            <OngoingGamesCard price='30' user_name='Lewandowski' user_dp={require('../../asset/images/dp.png')} details='2 v 2: Best out of 3'/>
        </ScrollView>
      </SafeAreaView>
    );
}  