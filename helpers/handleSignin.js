import auth from '../services/auth'
import logger from '../utils/logger'

export default function handleSignin(email, password){
  let user = {
    email: email,
    password: password
  }
  auth
    .signin(user)
    .then(res => logger.info(res))
    .catch(error => logger.error(error))
}