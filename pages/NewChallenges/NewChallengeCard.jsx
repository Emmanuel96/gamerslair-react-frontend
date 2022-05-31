import React, {useState,} from 'react';
import {View, Text} from 'react-native';

import styles from './styles'
import { baseStyles } from '../../style';

import Card from '../../components/Card'
import CustomButton from '../../components/CustomButton';

export default function NewChallengeCard(props){
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
              image={require('../../asset/icons/check.png')}
              backgroundColor='rgba(105, 139, 78, 1)'
              style={styles.buttons}
            />
            <CustomButton
              image={require('../../asset/icons/close.png')}
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