import React, {useState,} from 'react';
import {View, Text} from 'react-native';

import styles from './styles'
import { baseStyles } from '../../style';

import Card from '../../components/Card'
import CustomButton from '../../components/CustomButton';
import handleAcceptReject from '../../helpers/challenges/handleAcceptReject';

import {useAuth, useSetAuth } from '../../contexts/AuthContext';

export default function NewChallengeCard(props){
  const auth = useAuth()
  const setAuth = useSetAuth()
  
  const [view, setView] = useState(false);
  const [challenge_state, setChallengeState] = useState(props.challenge.state)

  const accept = () =>{
    let data = {state:"accepted"}
    handleAcceptReject(props.challenge._id, data).then(response =>{
      alert(`You accepted ${response.response.data.updatedChallenge.sender.username}'s challenge`);
      setChallengeState(response.response.data.updatedChallenge.state)
    }).catch(err =>{
        if(err == 'null_access'){
            setAuth(false)
            navigation.navigate('signin', { name: 'signin' })
        }else{
            alert(err)
        }
    })
  }

  const reject = () =>{
    let data = {state:"accepted"}
    handleAcceptReject(props.challenge._id, data).then(response =>{
      alert(`You rejected ${response.response.data.updatedChallenge.sender.username}'s challenge`);
      setChallengeState(response.response.data.updatedChallenge.state)
    }).catch(err =>{
        if(err == 'null_access'){
            setAuth(false)
            navigation.navigate('signin', { name: 'signin' })
        }else{
            alert(err)
        }
    })
  }

  if(challenge_state !== 'created'){
    return null
  }
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
              onPress={accept}
              image={require('../../asset/icons/check.png')}
              backgroundColor='rgba(105, 139, 78, 1)'
              style={styles.buttons}
            />
            <CustomButton
              image={require('../../asset/icons/close.png')}
              backgroundColor='rgba(242, 36, 36, 1)'
              style={styles.buttons}
              onPress={reject}
            />
          </View>
        </View>
      }
    </Card>
  )
}