import axios from "axios"

const signin = async newObject => {
  const request = axios.post('http://localhost:3002/api/auth/signin', newObject)
  const res = await request;
  return res.data
}

const signup = async newObject => {
  const request = axios.post('http://localhost:3002/api/auth/signup', newObject)
  const res = await request;
  return res.data
}

export default { signin, signup }