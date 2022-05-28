import axios from "axios"
import { HOST } from "@env"

const signin = async payload => {
  const request = axios.post(`${HOST}/api/auth/signin`, payload)
  const res = await request;
  return res.data
}

const signup = async payload => {
  const request = axios.post(`${HOST}/api/auth/signup`, payload)
  const res = await request;
  return res.data
}

export default { signin, signup }