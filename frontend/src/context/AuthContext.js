import createContext from './createContext'
import api from '../axios/api'

const authReducer = (state, action) => {
    switch(action.type){
        case 'return_error':
            return { ...state, errMsg: action.payload }
        case 'signin':
            return { error: '', student: action.payload }
        case 'signup':
            return { error: '', student: action.payload }
        case 'signout':
            return { error: '', student: action.payload }
        default:
            return state
    }
}

const signin = dispatch => {
    return async (email, password) => {
        try {
            const res = await api.post('/students/signin', { email, password })
            // update student state with response from API
            dispatch({ type: 'signin', payload: res.data.student })
        }catch(err){
            dispatch({ type: 'return_error', payload: 'User login failed' })
        }
    }
}

const signup = dispatch => {
    return async (name, email, password) => {
        try {
            const res = await api.post('/students/signup', { name, email, password })
            // update student state with response from API
            dispatch({ type: 'signup', payload: res.data.student })
        }catch(err){
            dispatch({ type: 'return_error', payload: 'User registration failed' })
        }
    }
}

const signout = dispatch => {
    return async () => {
        try {
            dispatch({ type: 'signout', payload: null })
        }catch(err){
            dispatch({ type: 'return_error', payload: '' })
        }
    }
}

export const { Context, Provider } = createContext(authReducer, { signin, signup, signout }, {
    student: null,
    token: null,
    error: ''
})