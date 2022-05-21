import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView, Text} from 'react-native';
import PropTypes from 'prop-types';

import { baseStyles } from '../style';

import Header from '../components/Header'
import PageTitleBar from '../components/PageTitleBar'
import Card from '../components/Card'
import CustomButton from '../components/CustomButton';
import AcceptRejectChallengeCard from './AcceptRejectChallenge';



export default function NewChallenges() {
    return (
      <SafeAreaView>
        <Header price='30' dp={require('../asset/images/dp.png')}/>
        <PageTitleBar title='NEW CHALLENGES'/>
        <ScrollView
          style={styles.scrollView} 
          contentContainerStyle={styles.contentContainer}
        >
            <NewChallengeCard price='30' user_name='Lewandowski' user_dp={require('../asset/images/pic.png')} details='2 v 2: Best out of 3'/>
            <NewChallengeCard price='100' user_name='Stephen' user_dp={require('../asset/icons/user.png')} details='2 v 2: Best out of 3'/>
            <NewChallengeCard price='100' user_name='Stephen' user_dp={require('../asset/icons/user.png')} details='2 v 2: Best out of 3'/>
            <NewChallengeCard price='100' user_name='Stephen' user_dp={require('../asset/icons/user.png')} details='2 v 2: Best out of 3'/>
        </ScrollView>
        {/* <StatusBar style="auto" /> */}
      </SafeAreaView>
    );
  }


  const styles = StyleSheet.create({
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

  function NewChallengeCard(props){
    const [view, setView] = useState(false);
    return(
      <Card price={props.price} user_name={props.user_name} user_dp={props.user_dp}>
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
              <Text style={[styles.detailsText]}>{props.details}</Text>
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