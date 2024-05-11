import axios from 'axios';

axios.defaults.withCredentials = true;


const instance = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
    // 'Origin': 'http://localhost:8080/',
    'Accept': '*/*',
    'ngrok-skip-browser-warning': true,
    // 'Authorization': 'oi',
    // 'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzY3JpYmV5Iiwic3ViIjoiYW5kcmV6YXJ6dXJAaG90bWFpbC5jb20iLCJleHAiOjE3MTQ4MTQ5ODV9.4ITUQugmKbzj7VTT-oNfHN2giyanfngsCBaDKet_bV8',
    withCredentials: true
  },
  withCredentials: true
});

export default instance;