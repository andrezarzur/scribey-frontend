import axios from '../axios'
/**
*
* @param {Object} payload
*
* get access token
*/

export const register = async (payload) => {
    try {
        const { data } = await axios.post('/auth/register', payload)
        localStorage.setItem('user', JSON.stringify(data))
        return {
            response: data,
            status: 200
        }
    } catch (err) {
        return {
            response: err.response.data,
            status: err.response.status
        }
    }
}

export const login = async (payload) => {
    try {
        const { data } = await axios.post('/auth/login', payload)
        localStorage.setItem('user', JSON.stringify(data))
        return {
            response: data,
            status: 200
        }
    } catch (err) {
        console.log(err)
        return {
            response: err.response.message,
            status: err.response.status
        }
    }
}

export const logout = async () => {
    try {
        const { data } = await axios.get('/auth/logout')
        localStorage.removeItem('user')
        return {
            response: data,
            status: 200
        }
    } catch (err) {
        console.log(err)
        return {
            response: err.response.message,
            status: err.response.status
        }
    }
}

export const getBooks = async () => {
    try {
        const response = await axios.get('/book/all')
        return response.status == 200 ? response.data : []
    } catch (err) {
        console.log(err)
        return []
    }
}

export const getBook = async (payload) => {
    try {
        const response = await axios.get('/book/' + payload)
        return response.status == 200 ? response.data : []
    } catch (err) {
        console.log(err)
        return []
    }
}


export const createBook = async (payload) => {
    try {
        const response = await axios.post('/book', payload)
        return response.status == 200 ? response.data : []
    } catch (err) {
        console.log(err)
        return []
    }
}

export const deleteBook = async (payload) => {
    try {
        const response = await axios.delete('/book', {data: payload})
        return response.status == 200 ? response.data : []
    } catch (err) {
        console.log(err)
        return []
    }
}

export const updateBook = async (payload) => {
    try {
        const response = await axios.put('/book', payload)
        return response.status == 200 ? response.data : []
    } catch (err) {
        console.log(err)
        return []
    }
}