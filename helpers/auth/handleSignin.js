import auth from '../../services/auth'
import logger from '../../utils/logger'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function handleSignin(email, password){
  let user = {
    email: email,
    password: password
  }
  const response = await auth
    .signin(user)
    .then(async res => {
      logger.info(res)
      try {
        await AsyncStorage.setItem('@accessToken', res.accessToken)          
        await AsyncStorage.setItem('@refreshToken', res.accessToken)          
        await AsyncStorage.setItem('@user', JSON.stringify(res.user))
        return {
          success:true,
          user: res.user
        }
      } catch (e) {
        console.log('unable to store access token')
        logger.error(e)
      }
      return false
    })
    .catch(error => logger.error(error))
    
  return response
}
