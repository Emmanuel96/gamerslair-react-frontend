import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import handleReportGame from '../../helpers/games/handleReportGame';
import handleVerify from '../../helpers/games/handleVerify';

import styles from './styles'
import { baseStyles } from '../../style';

import Card from '../../components/Card'
import CustomButton from '../../components/CustomButton';

export default function OngoingGamesCard(props){
    const [report, setReport] = useState(false);
    const [reported, setReported] = useState(false);
    const [verified, setVerified] = useState(false);
    const [reporter, setReporter] = useState(props.game.reported_by == undefined?'':props.game.reported_by._id)
    const [user_id, setUserId] = useState();

    useEffect(async ()=>{
      let user_id
      try {
        user_id = await AsyncStorage.getItem('@user_id')
          if(user_id == null) {
            props.setAuthenticated(false)
            navigation.navigate('signin', { name: 'signin' })
          }      
          setUserId(user_id)  
      } catch(e) {
          throw e
      }
      if(props.game.progress == "reported" || props.game.progress == "verified"){
        setReport(true)
        setReported(true)
      }
    },[])

    const report_result = (data) =>{
      const body={'report':data}
      handleReportGame(props.game._id, body).then(response =>{
        setReporter(response.response.data.reportedGame.reported_by._id)
        setReported(true)
      }).catch(err =>{
          if(err == 'null_access'){
              props.setAuthenticated(false)
              navigation.navigate('signin', { name: 'signin' })
          }else{
              alert(`Report game failed \n ${err}`)
              console.log(err)
          }
      })
    }

    const verify = (data) =>{
      const body={'report':data}
      handleVerify(props.game._id, body).then(response=>{
        console.log(response.response.data)
        if(response.response.data.verifiedGame.progress == 'verified'){
          setVerified(true)
        }else{
          setReported(false)
          setReport(false)
        }
      }).catch(err =>{
          if(err == 'null_access'){
              props.setAuthenticated(false)
              navigation.navigate('signin', { name: 'signin' })
          }else{
              alert(`Report game failed \n ${err}`)
              console.log(err)
          }
      })
    }

    return(
      <Card challenge={props.game}>
        {!reported &&
          <View style={styles.details}>
            <Text style={[baseStyles.h4, baseStyles.customColor]}>DETAILS:</Text>
            <Text style={[styles.detailsText]}>{props.game.rules}</Text> 
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
                      onPress={()=> report_result('win')}
                    />
                    <CustomButton
                      title="I LOST"
                      color="#fff"
                      backgroundColor='rgba(242, 36, 36, 1)'
                      style={styles.buttons}
                      textStyle={baseStyles.textShadowProp}
                      onPress={()=> report_result('loss')}
                    />
                  </View> 
                }
              </View> ||
              
              <View>
                {(reporter == user_id) &&
                  <View style={styles.pending_button}>
                    <CustomButton
                        title='Awaiting report verification'
                        color="#fff"
                    />
                  </View>||
                  <View>
                    <View style={styles.details}>
                        <Text style={[baseStyles.bold, styles.detailsText]}>{props.game.reported_by.username} says {props.game.reported_by._id == props.game.winner._id ? 'he' : 'you'} won the game</Text>  
                    </View>
                    <View style={styles.buttonGroup}>
                      <CustomButton
                        image={require('../../asset/icons/check.png')}
                        backgroundColor='rgba(105, 139, 78, 1)'
                        style={styles.buttons}
                        onPress={()=>verify(true)}
                      />
                      <CustomButton
                        image={require('../../asset/icons/close.png')}
                        backgroundColor='rgba(242, 36, 36, 1)'
                        style={styles.buttons}
                        onPress={()=>verify(false)}
                      />
                    </View>
                  </View>
                }
              </View>
            }
          </View> ||
  
          <View>
            {props.game.winner._id == user_id &&
              <CustomButton
                title="YOU WON THIS GAME"
                color="#fff"
                backgroundColor='rgba(105, 139, 78, 1)'
                style={styles.button}
                textStyle={baseStyles.textShadowProp}
                // onPress={()=>{
                //   setVerified(false);
                //   setReported(false);
                //   setReport(false);
                // }}
              /> ||
              <CustomButton
                title="YOU LOST THIS GAME"
                color="#fff"
                backgroundColor='rgba(242, 36, 36, 1)'
                style={styles.button}
                textStyle={baseStyles.textShadowProp}
                // onPress={()=>{
                //   setVerified(false);
                //   setReported(false);
                //   setReport(false);
                // }}
              />
            }
            
          </View>
        }    
      </Card>
    )
}
