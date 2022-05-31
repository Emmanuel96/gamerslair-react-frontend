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
          <OngoingGamesCard/>
          <OngoingGamesCard/>
          <OngoingGamesCard/>
        </ScrollView>
      </SafeAreaView>
    );
}  