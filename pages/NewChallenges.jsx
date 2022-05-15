import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';

import Header from '../components/Header'
import PageTitleBar from '../components/PageTitleBar'
import Card from '../components/Card'
import CustomButton from '../components/CustomButton';



export default function AcceptRejectChallenge() {
    return (
      <SafeAreaView>
        <Header price='30' dp={require('../asset/images/dp.png')}/>
        <PageTitleBar title='NEW CHALLENGES'/>
        <ScrollView
          style={styles.scrollView} 
          contentContainerStyle={styles.contentContainer}
        >
            <NewChallengeCard price='30' user_name='Lewandowski' user_dp={require('../asset/images/pic.png')}/>
            <NewChallengeCard price='100' user_name='Stephen' user_dp={require('../asset/icons/user.png')}/>
            <NewChallengeCard price='100' user_name='Stephen' user_dp={require('../asset/icons/user.png')}/>
            <NewChallengeCard price='100' user_name='Stephen' user_dp={require('../asset/icons/user.png')}/>
        </ScrollView>
        {/* <StatusBar style="auto" /> */}
      </SafeAreaView>
    );
  }


  const styles = StyleSheet.create({
    contentContainer: {
      paddingBottom: 400,
    },
    view_button:{
      alignSelf:'center',
    },
  })

  function NewChallengeCard(props){
    return(
      <Card price={props.price} user_name={props.user_name} user_dp={props.user_dp}>
        <View style={styles.view_button}>
            <CustomButton
                title='VIEW DETAILS'
                color="#fff"
            />
        </View>
      </Card>
    )
  }