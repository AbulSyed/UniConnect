import axios from 'axios'

/*  
  setting up baseURL
  so we dont have to repeat the API URL everytime in our code
*/

export default axios.create({
  baseURL: 'http://localhost:8080/api'
})