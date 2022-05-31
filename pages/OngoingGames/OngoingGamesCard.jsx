import React, {useState,} from 'react';
import {View, Text} from 'react-native';

import styles from './styles'
import { baseStyles } from '../../style';

import Card from '../../components/Card'
import CustomButton from '../../components/CustomButton';

export default function OngoingGamesCard(props){
    const [report, setReport] = useState(false);
    const [reported, setReported] = useState(false);
    const [verified, setVerified] = useState(false);
    return(
      <Card>
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
                    image={require('../../asset/icons/check.png')}
                    backgroundColor='rgba(105, 139, 78, 1)'
                    style={styles.buttons}
                    onPress={()=>setVerified(true)}
                  />
                  <CustomButton
                    image={require('../../asset/icons/close.png')}
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
