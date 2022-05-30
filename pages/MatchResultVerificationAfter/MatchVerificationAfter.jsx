import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView, Text } from 'react-native';

import styles from './styles'
import { baseStyles } from '../../style';

import Header from '../../components/Header'
import PageTitleBar from '../../components/PageTitleBar'
import Card from '../../components/Card'
import CustomButton from '../../components/CustomButton';



export default function MatchVerificationAfter() {
    return (
      <SafeAreaView>
        <Header price='30' dp={require('../../asset/images/dp.png')}/>
        <PageTitleBar title='NEW CHALLENGES'/>
        <ScrollView
          style={styles.scrollView} 
          contentContainerStyle={styles.contentContainer}
        >
            <MatchVerificationAfterCard price='30' user_name='Lewandowski' user_dp={require('../../asset/images/dp.png')} details='2 v 2: Best out of 3'/>
        </ScrollView>
      </SafeAreaView>
    );
  }


  function MatchVerificationAfterCard(props){
    return(
      <Card price={props.price} user_name={props.user_name} user_dp={props.user_dp}>
        <View style={styles.details}>
            <Text style={[baseStyles.h4, baseStyles.customColor]}>DETAILS:</Text>
            <Text style={[styles.detailsText]}>{props.details}</Text>
            
        </View>
        <CustomButton
            title="YOU LOST THIS GAME"
            color="#fff"
            backgroundColor='rgba(242, 36, 36, 1)'
            style={styles.button}
            textStyle={baseStyles.textShadowProp}
        />        
      </Card>
    )
  }