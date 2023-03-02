import axios from '../config/axios.config';

// Retrieve a random chuck joke
export const getRandomJoke = () => {
    return axios.get('/jokes/random');
};