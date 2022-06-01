import React, {useState,useEffect} from 'react';
import {SafeAreaView,ScrollView, View, Text} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import {BACKEND_HOST, AUTH_ACCES_TOKEN} from "@env"

import styles from './styles'
import { baseStyles } from '../../style';

import NewChallengeCard from './NewChallengeCard';
import PageTitleBar from '../../components/PageTitleBar'

export default function NewChallenges(props) {
  const [challenges, setChallenges] = useState([]);
  useFocusEffect(()=>{
    props.setPage('new_challenges')
  })
  useEffect(()=>{
    console.log(challenges)
    axios.get(`${BACKEND_HOST}/api/challenge/fetch_all`,
    {
      headers:{
        "Authorization": `Bearer ${AUTH_ACCES_TOKEN}`
      }
    }
  ).then(response =>{
      setChallenges(response.data)
    }).catch(error=>{
      console.log(error)
      alert('Unable to fetch challenges');
      setChallenges([])
    })
  }, [])

  return (
    <SafeAreaView style={baseStyles.container}>
      <PageTitleBar title='NEW CHALLENGES'/>
      {!(challenges[0] == undefined) &&
        <ScrollView
          style={styles.scrollView} 
          contentContainerStyle={styles.contentContainer}
          automaticallyAdjustContentInsets={true}
        >
          {challenges.map((challenge) =>
            <NewChallengeCard challenge={challenge}/>
          )}
        </ScrollView>||
        <View style={styles.blank}>
          <Text style={baseStyles.customColor}>No challenges found for now.</Text>
        </View>
      }
    </SafeAreaView>
  );
}