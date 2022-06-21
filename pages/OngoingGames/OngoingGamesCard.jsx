import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import handleReportGame from '../../helpers/games/handleReportGame';
import handleVerify from '../../helpers/games/handleVerify';
import {socket} from '../../services/socket';

import styles from './styles'
import { baseStyles } from '../../style';

import Card from '../../components/Card'
import CustomButton from '../../components/CustomButton';

export default function OngoingGamesCard({game}){
    const [thisGame, setThisGame] = useState(game)
    const [report, setReport] = useState(false);
    const [reported, setReported] = useState(false);
    const [verified, setVerified] = useState(false);
    const [reporter, setReporter] = useState(thisGame.reported_by == undefined?'':thisGame.reported_by._id)
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
      if(thisGame.progress == "reported" || thisGame.progress == "verified"){
        setReport(true)
        setReported(true)
      }
    },[thisGame])

    useEffect(()=>{
      const gameReportListener = (reportedGame)=>{
        console.log('game report')
        if(reportedGame._id == game._id){
          setThisGame((prevThisGame)=>{
            const updatedThisGame = reportedGame
            return updatedThisGame
          })
          
          // console.log(thisGame)
        }
      }
  
      AsyncStorage.multiGet(['@user_id','@socket_session_id']).then((data) =>{
        socket.auth= {'userId':data[0][1], 'sessionID':data[1][1]}
        if(!socket.connected){
          console.log('connecting...')
          socket.connect()
        }
        socket.on('game-report', gameReportListener)
      }).catch(err=>{
        alert(err)
        console.log(err)
      })
    }, [])

    const report_result = (data) =>{
      const body={'report':data}
      handleReportGame(thisGame._id, body).then(response =>{
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
      handleVerify(thisGame._id, body).then(response=>{
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
      <Card challenge={thisGame}>
        {!reported &&
          <View style={styles.details}>
            <Text style={[baseStyles.h4, baseStyles.customColor]}>DETAILS:</Text>
            <Text style={[styles.detailsText]}>{thisGame.rules}</Text> 
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
                        <Text style={[baseStyles.bold, styles.detailsText]}>{thisGame.reported_by.username} says {thisGame.reported_by._id == thisGame.winner._id ? 'he' : 'you'} won the game</Text>  
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
            {thisGame.winner._id == user_id &&
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
