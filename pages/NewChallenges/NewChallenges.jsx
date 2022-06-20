import React, {useState,useEffect} from 'react';
import {SafeAreaView,ScrollView, View, Text} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {socket} from '../../services/socket';

import styles from './styles'
import { baseStyles } from '../../style';

import NewChallengeCard from './NewChallengeCard';
import PageTitleBar from '../../components/PageTitleBar'
import handleFetchChallenges from '../../helpers/challenges/handleFetchChallenges';

export default function NewChallenges(props) {
  const [challenges, setChallenges] = useState([]);

  useFocusEffect(()=>{
    props.setPage('new_challenges')
  })

  useEffect(()=>{
    handleFetchChallenges().then(response =>{
      setChallenges(response.response.data)
    }).catch(err =>{
      setChallenges([])
      if(err == 'null_access'){
          props.setAuthenticated(false)
          navigation.navigate('signin', { name: 'signin' })
      }else{
          alert(`Unable to fetch challenges \n ${err}`)
          console.log(err)
      }
    })
  }, [props.authenticated])

  useEffect(()=>{
    const challengeListener = (response)=>{
      setChallenges((prevChallenges)=>{
        const updatedChallenges = [response.newChallenge, ...prevChallenges]
        return updatedChallenges
      })
    }

    
    AsyncStorage.multiGet(['@user_id','@socket_session_id']).then((data) =>{
      socket.auth= {'userId':data[0][1], 'sessionID':data[1][1]}
      console.log(data)
      if(!socket.connected){
        console.log('connecting...')
        socket.connect()
      }
      socket.on('new-event', ()=>console.log('new-event'))
      socket.on('new-challenge', challengeListener)
    }).catch(err=>{
      alert(err)
      console.log(err)
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
          {
            React.Children.toArray(
              challenges.map((challenge) =>
                <NewChallengeCard challenge={challenge}/>
              )
            )
          }
        </ScrollView>||
        <View style={styles.blank}>
          <Text style={baseStyles.customColor}>No challenges found for now.</Text>
        </View>
      }
    </SafeAreaView>
  );
}