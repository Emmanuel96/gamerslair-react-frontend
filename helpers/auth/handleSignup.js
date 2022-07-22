import auth from '../../services/auth'
import logger from '../../utils/logger'

export default function handleSignup(username, email, password) {
  let newUser = {
    username: username,
    email: email,
    password: password
  }
  auth
    .signup(newUser)
    .then(res => logger.info(res))
    .catch(error => logger.error(error))
}