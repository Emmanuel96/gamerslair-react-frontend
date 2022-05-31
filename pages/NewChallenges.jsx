import React, {useState,useEffect} from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView, Text} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import {BACKEND_HOST, AUTH_ACCESS_TOKEN} from "@env"

import { baseStyles } from '../style';

import PageTitleBar from '../components/PageTitleBar'
import Card from '../components/Card'
import CustomButton from '../components/CustomButton';

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

function NewChallengeCard(props){
  const [view, setView] = useState(false);
  return(
    <Card challenge={props.challenge}>
      {/* view details button */}
      {!view &&
        <View style={styles.view_button}>
            <CustomButton
                title='VIEW DETAILS'
                color="#fff"
                onPress={()=>setView(true)}
            />
        </View>
      }

      {/* details */}
      {view &&
        <View>
          <View style={styles.details}>
            <Text style={[baseStyles.h4, baseStyles.customColor]}>DETAILS:</Text>
            <Text style={[styles.detailsText]}>{props.challenge.rules}</Text>
          </View>
          <View style={styles.buttonGroup}>
            <CustomButton
              image={require('../asset/icons/check.png')}
              backgroundColor='rgba(105, 139, 78, 1)'
              style={styles.buttons}
            />
            <CustomButton
              image={require('../asset/icons/close.png')}
              backgroundColor='rgba(242, 36, 36, 1)'
              style={styles.buttons}
              onPress={()=>setView(false)}
            />
          </View>
        </View>
      }
    </Card>
  )
}





  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      // alignItems: 'center',
      justifyContent: 'flex-start',
    },
    contentContainer: {
      paddingBottom: 400,
    },
    // view details button
    view_button:{
      alignSelf:'center',
    },
    // details
    details:{
      paddingHorizontal:'5%',
      marginTop:8,
      marginBottom:50,
    },
    detailsText:{
      fontSize:21,
      marginTop:10,
    },
    buttonGroup:{
      alignSelf:'center',
      flexDirection:'row',
      alignItems:'center',
      marginBottom:15,
    },
    buttons:{
      marginHorizontal:20,
    }
  })

