import createContext from './createContext'
import api from '../axios/api'

// reducer - function that manages changes to an object
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
        case 'friend':
            return { ...state, student: {
                ...state.student,
                friends: [...state.student.friends, action.payload]
            } }
        case 'unfriend':
            return { ...state, student: {
                ...state.student,
                friends: state.student.friends.filter(friend => friend !== action.payload)
            } }
        case 'joinEvent':
            return { ...state, student: {
                ...state.student,
                events: [...state.student.events, action.payload]
            } }
        default:
            return state
    }
}

const signin = dispatch => {
    return async (email, password) => {
        try {
            const res = await api.post('/students/signin', { email, password })
            // update student state with response from API
            dispatch({ type: 'signin', payload: res.data })
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
            dispatch({ type: 'signup', payload: res.data })
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

const friend = dispatch => {
    return (id) => {
        dispatch({ type: 'friend', payload: id })
    }
}

const unfriend = dispatch => {
    return (id) => {
        dispatch({ type: 'unfriend', payload: id })
    }
}

const joinEvent = dispatch => {
    return (id) => {
        dispatch({ type: 'joinEvent', payload: id })
    }
}

export const { Context, Provider } = createContext(authReducer, { signin, signup, signout, friend, unfriend, joinEvent }, {
    student: null,
    token: null,
    error: ''
})