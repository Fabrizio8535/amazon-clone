import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-1e59f/us-central1/api' //the api (cloud function) url
})

export default instance

//http://localhost:5001/challenge-1e59f/us-central1/api