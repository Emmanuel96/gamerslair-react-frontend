import React, {useState,} from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { baseStyles } from '../style';

import PageTitleBar from '../components/PageTitleBar'
import Card from '../components/Card'
import CustomButton from '../components/CustomButton';




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
            <OngoingGamesCard price='30' user_name='Lewandowski' user_dp={require('../asset/images/pic.png')} details='2 v 2: Best out of 3'/>
            <OngoingGamesCard price='20' user_name='Stephen' user_dp={require('../asset/icons/user.png')} details='1 v 1: Best out of 5'/>
            <OngoingGamesCard price='30' user_name='Lewandowski' user_dp={require('../asset/images/pic.png')} details='2 v 2: Best out of 3'/>
        </ScrollView>
        {/* <StatusBar style="auto" /> */}
      </SafeAreaView>
    );
  }


  function OngoingGamesCard(props){
    const [report, setReport] = useState(false);
    const [reported, setReported] = useState(false);
    const [verified, setVerified] = useState(false);
    return(
      <Card price={props.price} user_name={props.user_name} user_dp={props.user_dp}>
        {!reported &&
          <View style={styles.details}>
            <Text style={[baseStyles.h4, baseStyles.customColor]}>DETAILS:</Text>
            <Text style={[styles.detailsText]}>{props.details}</Text> 
          </View>
        }

        {!verified &&
          <View>
            {!reported &&
              <View>
                {!report &&
                  //report results button
                  <CustomButton
                      title="REPORT RESULTS"
                      color="#fff"
                      backgroundColor='rgba(105, 139, 78, 1)'
                      style={styles.button}
                      textStyle={baseStyles.textShadowProp}
                      onPress={()=>setReport(true)}
                  />||
                
                  // {/* // first verification buttons */}
                  <View style={styles.buttonGroup}>
                    <CustomButton
                      title="I WON"
                      color="#fff"
                      backgroundColor='rgba(105, 139, 78, 1)'
                      style={styles.buttons}
                      textStyle={baseStyles.textShadowProp}
                      onPress={()=>setReported(true)}
                    />
                    <CustomButton
                      title="I LOST"
                      color="#fff"
                      backgroundColor='rgba(242, 36, 36, 1)'
                      style={styles.buttons}
                      textStyle={baseStyles.textShadowProp}
                      onPress={()=>setReport(false)}
                    />
                  </View> 
                 }
              </View> ||
              
              <View>
                {/* // second verification buttons */}
                <View style={styles.details}>
                    <Text style={[baseStyles.bold, styles.detailsText]}>Lewandoski says he won the game</Text>  
                </View>
                <View style={styles.buttonGroup}>
                  <CustomButton
                    image={require('../asset/icons/check.png')}
                    backgroundColor='rgba(105, 139, 78, 1)'
                    style={styles.buttons}
                    onPress={()=>setVerified(true)}
                  />
                  <CustomButton
                    image={require('../asset/icons/close.png')}
                    backgroundColor='rgba(242, 36, 36, 1)'
                    style={styles.buttons}
                    onPress={()=>setReported(false)}
                  />
                </View>
              </View>
            }
          </View> ||

          <CustomButton
            title="YOU LOST THIS GAME"
            color="#fff"
            backgroundColor='rgba(242, 36, 36, 1)'
            style={styles.button}
            textStyle={baseStyles.textShadowProp}
            onPress={()=>{
              setVerified(false);
              setReported(false);
              setReport(false);
            }}
          />
        }    
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
    },
    // first verification buttons
    buttonGroup:{
      alignSelf:'center',
      flexDirection:'row',
      alignItems:'center',
      marginBottom:15,
    },
    buttons:{
      marginHorizontal:15,
      paddingHorizontal:20,
      paddingVertical:13,
    }
  })