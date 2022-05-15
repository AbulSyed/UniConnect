import axios from 'axios'

/*  
  setting up baseURL
  so we dont have to repeat the API URL everytime in our code
  also useful when we deploy, so just change API url in 1 place
*/

export default axios.create({
  // dev env
  baseURL: 'http://localhost:8080/api',

  // production env
  // baseURL: 'https://syed-uniconnect-api.herokuapp.com/api',
})