import AsyncStorage from '@react-native-async-storage/async-storage';

exports.fetchAccessToken = async function(){
    let accessToken
    try {
        accessToken = await AsyncStorage.getItem('@accessToken')
        if(accessToken == null) {
            throw 'null_access'
            alert('Null Access token')
        }        
        return accessToken
    } catch(e) {
        throw e
        alert(`unable to fetch access token: ${e}`)
        console.log(e)
    }
}