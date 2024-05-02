import axios from '../axios'
/**
*
* @param {Object} payload
*
* get access token
*/

export const register = (payload) => {
    return axios.post('/auth/register', payload)
    .then(({response}) => {
        return {
            response: response, 
            status: 200
        }
    })
    .catch((err) => {
        return {
            response: err.response.data, 
            status: err.response.status
        }
    })
}

export const login = (payload) => {
    return axios.post('/auth/login', payload)
    .then(({response}) => {
        return {
            response: response, 
            status: 200
        }
    })
    .catch((err) => {
        console.log(err)
        return {
            response: err.response.message, 
            status: err.response.status
        }
    })
}