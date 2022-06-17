import AsyncStorage from '@react-native-async-storage/async-storage';
import {HOST } from "@env"
import axios from 'axios';

export default async function (id, body){
    let accessToken
    try {
        accessToken = await AsyncStorage.getItem('@accessToken')
        if(accessToken == null) {
            throw 'null_access'
        }        
    } catch(e) {
        throw e
        console.log(e)
    }

    const request =  await axios.post(`${HOST}/api/game/report/${id}`,
        body,
        {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": `Bearer ${accessToken}`
            }
        }
    ).then(response=>{
        return{
            status:'success',
            response:response
        }
    }).catch(err=>{
        throw err
    })
    
    return request
}