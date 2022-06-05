import React, {useState,useEffect} from 'react';
import {SafeAreaView,ScrollView, View, Text} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import {HOST} from "@env"
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles'
import { baseStyles } from '../../style';

import NewChallengeCard from './NewChallengeCard';
import PageTitleBar from '../../components/PageTitleBar'

export default function NewChallenges(props) {
  const [challenges, setChallenges] = useState([]);
  useFocusEffect(()=>{
    props.setPage('new_challenges')
  })
  useEffect(async ()=>{
    try {
      const accessToken = await AsyncStorage.getItem('@accessToken')
      if(accessToken == null) {
        props.setAuthenticated(false)
        navigation.navigate('signin', { name: 'signin' })
      }
      axios.get(`${HOST}/api/challenge/fetch_incoming`,
        {
          headers:{
            "Authorization": `Bearer ${accessToken}`
          }
        }
      ).then(response =>{
          setChallenges(response.data)
      }).catch(error=>{
          console.log(error)
          alert('Unable to fetch challenges');
          setChallenges([])
      })
    } catch(e) {
      alert("unable to fetch access token")
      console.log(e)
    }
    
  }, [props.authenticated])

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