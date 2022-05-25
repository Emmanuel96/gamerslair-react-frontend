import axios from "axios"

const signin = async payload => {
  const request = axios.post(`${process.env.HOST}/api/auth/signin`, payload)
  const res = await request;
  return res.data
}

const signup = async payload => {
  const request = axios.post(`${process.env.HOST}/api/auth/signup`, payload)
  const res = await request;
  return res.data
}

export default { signin, signup }