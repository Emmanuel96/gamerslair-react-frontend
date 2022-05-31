import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView, Text } from 'react-native';

import styles from './styles'
import { baseStyles } from '../../style';

import Header from '../../components/Header'
import PageTitleBar from '../../components/PageTitleBar'
import Card from '../../components/Card'
import CustomButton from '../../components/CustomButton';



export default function MatchResultVerification2() {
    return (
      <SafeAreaView>
        <Header price='30' dp={require('../../asset/images/dp.png')}/>
        <PageTitleBar title='NEW CHALLENGES'/>
        <ScrollView
          style={styles.scrollView} 
          contentContainerStyle={styles.contentContainer}
        >
          <MatchResultVerification2Card price='30' user_name='Lewandowski' user_dp={require('../../asset/images/dp.png')} details='2 v 2: Best out of 3'/>
        </ScrollView>
      </SafeAreaView>
    );
}


function MatchResultVerification2Card(props){
  return(
    <Card price={props.price} user_name={props.user_name} user_dp={props.user_dp}>
      <View style={styles.details}>
          <Text style={[baseStyles.bold, styles.detailsText]}>Lewandoski says he won the game</Text>  
      </View>
      <View style={styles.buttonGroup}>
        <CustomButton
          image={require('../../asset/icons/check.png')}
          backgroundColor='rgba(105, 139, 78, 1)'
          style={styles.buttons}
        />
        <CustomButton
          image={require('../../asset/icons/close.png')}
          backgroundColor='rgba(242, 36, 36, 1)'
          style={styles.buttons}
        />
      </View>       
    </Card>
  )
}