import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://svuv-api.herokuapp.com/data_read/last',
  method: "GET",
            timeout: 5000,
            headers: {
                Accept: 'application/json'
            }
});



export default api;