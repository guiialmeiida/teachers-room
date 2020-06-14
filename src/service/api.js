import axios from 'axios';

const api = axios.create({
    baseURL: 'https://teachers-room.herokuapp.com/',
})

export default api;