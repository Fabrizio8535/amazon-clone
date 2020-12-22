import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-1e59f.cloudfunctions.net/api' //the api (cloud function) url
})

export default instance

//http://localhost:5001/challenge-1e59f/us-central1/api