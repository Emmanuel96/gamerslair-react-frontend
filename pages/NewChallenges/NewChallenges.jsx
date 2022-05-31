import React, {useState,useEffect} from 'react';
import {SafeAreaView,ScrollView} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import {BACKEND_HOST, AUTH_ACCESS_TOKEN} from "@env"

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
    axios.get(`${BACKEND_HOST}/api/challenge/fetch_all`,
    {
      headers:{
        "Authorization": `Bearer ${AUTH_ACCESS_TOKEN}`
      }
    }
  ).then(response =>{
      setChallenges(response.data)
    }).catch(error=>{
      console.log(error)
      alert('Unable to fetch challenges');
    })
  }, [])

  return (
    <SafeAreaView style={baseStyles.container}>
      <PageTitleBar title='NEW CHALLENGES'/>
      <ScrollView
        style={styles.scrollView} 
        contentContainerStyle={styles.contentContainer}
      >
        {challenges.map((challenge) =>
          <NewChallengeCard challenge={challenge}/>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}