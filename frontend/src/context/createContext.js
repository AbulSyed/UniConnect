/* 

  NOTE: CODE REUSED AND MODIFIED FROM A COURSE I PREVIOUSLY TOOK:

  -> https://www.udemy.com/course/the-complete-react-native-and-redux-course/

  LINES 19-26 ARE MY ADDITIONS

*/

import { createContext, useReducer, useEffect } from 'react'

export default (reducer, actions, initialState) => {
  const Context = createContext()

  // providers used to provide data to components
  // in index.js the <App /> component wrapper by provider
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState, () => {
      const localData = localStorage.getItem('student')
      return localData ? JSON.parse(localData) : initialState
    })

    useEffect(() => {
      localStorage.setItem('student', JSON.stringify(state))
    }, [state])

    const boundActions = {}
    for(let key in actions){
      boundActions[key] = actions[key](dispatch)
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        { children }
      </Context.Provider>
    )
  }

  return { Context, Provider }
}