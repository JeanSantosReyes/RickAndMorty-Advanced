import axios from "axios"

const RickAndMortyAPI = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default RickAndMortyAPI