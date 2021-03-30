import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-my-burger-fe06b-default-rtdb.firebaseio.com/'
});

export default instance;