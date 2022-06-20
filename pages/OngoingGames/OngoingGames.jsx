import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, View, Text} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles'
import { baseStyles } from '../../style';

import PageTitleBar from '../../components/PageTitleBar'
import OngoingGamesCard from './OngoingGamesCard'
import handleFetchGames from '../../helpers/games/handleFetchGames';


export default function OngoingGames(props) {
  const [games, setGames] = useState([]);

  useFocusEffect(()=>{
    props.setPage('ongoing_games')
  })
  
  useEffect(()=>{
    handleFetchGames().then(response =>{
      // console.log(response.response.data)
      setGames(response.response.data)
    }).catch(err =>{
        if(err == 'null_access'){
            props.setAuthenticated(false)
            navigation.navigate('signin', { name: 'signin' })
        }else{
            alert(`Unable to fetch games \n ${err}`)
            console.log(err)
        }
    })
  },[])

  return (
    <SafeAreaView style={baseStyles.container}>
      <PageTitleBar title='ONGOING GAMES'/>
      {!(games[0] == undefined) &&
        <ScrollView
          style={styles.scrollView} 
          contentContainerStyle={styles.contentContainer}
          automaticallyAdjustContentInsets={true}
        >
          {
            React.Children.toArray(
              games.map((game) =>
                <OngoingGamesCard game={game}/>
              )
            )
          }
        </ScrollView>||
        <View style={baseStyles.blank}>
          <Text style={baseStyles.customColor}>No games found for now.</Text>
        </View>
      }
    </SafeAreaView>
  );
}  