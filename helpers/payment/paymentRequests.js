import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchAccessToken} from '../fetchAuthTokens'
import {HOST } from "@env"
import axios from 'axios';

exports.createPaymentIntent = async function (amount){
    const accessToken = await fetchAccessToken()

    const request =  await axios.post(`${HOST}/api/payment/create_payment_intent`,
        {amount},
        {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": `Bearer ${accessToken}`
            }
        }
    ).then(response =>{
        return response.data
    }).catch(err=>{
        alert(`Unable to create payment intent \n ${err}`)
        throw err
        console.log(err)
    })
    
    return request
}

exports.updateUserAccount = async (amount) =>{
    const accessToken = await fetchAccessToken()

    return await axios.post(`${HOST}/api/payment/update_account`,
        {amount},
        {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": `Bearer ${accessToken}`
            }
        }
    ).then(response =>{
        return response.data.account_bal
    }).catch(err=>{
        alert(`Account update failed \n ${err}`)
        throw err
        console.log(err)
    })
}