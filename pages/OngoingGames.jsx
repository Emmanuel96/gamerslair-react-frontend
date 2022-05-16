import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView, Text } from 'react-native';

import { baseStyles } from '../style';

import Header from '../components/Header'
import PageTitleBar from '../components/PageTitleBar'
import Card from '../components/Card'
import CustomButton from '../components/CustomButton';



export default function OngoingGames() {
    return (
      <SafeAreaView>
        <Header price='30' dp={require('../asset/images/dp.png')}/>
        <PageTitleBar title='NEW CHALLENGES'/>
        <ScrollView
          style={styles.scrollView} 
          contentContainerStyle={styles.contentContainer}
        >
            <OngoingGamesCard price='30' user_name='Lewandowski' user_dp={require('../asset/images/pic.png')} details='2 v 2: Best out of 3'/>
            <OngoingGamesCard price='20' user_name='Stephen' user_dp={require('../asset/icons/user.png')} details='1 v 1: Best out of 5'/>
            <OngoingGamesCard price='30' user_name='Lewandowski' user_dp={require('../asset/images/pic.png')} details='2 v 2: Best out of 3'/>
        </ScrollView>
        {/* <StatusBar style="auto" /> */}
      </SafeAreaView>
    );
  }


  function OngoingGamesCard(props){
    return(
      <Card price={props.price} user_name={props.user_name} user_dp={props.user_dp}>
        <View style={styles.details}>
            <Text style={[baseStyles.h4, baseStyles.customColor]}>DETAILS:</Text>
            <Text style={[styles.detailsText]}>{props.details}</Text>
            
        </View>
        <CustomButton
            title="REPORT RESULTS"
            color="#fff"
            backgroundColor='rgba(105, 139, 78, 1)'
            style={styles.button}
            textStyle={baseStyles.textShadowProp}
        />        
      </Card>
    )
  }


  const styles = StyleSheet.create({
    contentContainer: {
      paddingBottom: 400,
    },
    details:{
      paddingHorizontal:'5%',
      marginTop:8,
      marginBottom:35,
    },
    detailsText:{
      fontSize:21,
      marginTop:10,
    },
    button:{
        alignSelf:'center',
        alignItems:'center',
        marginBottom:15,
        paddingVertical:25,
        paddingHorizontal:25,
        
    }
  })