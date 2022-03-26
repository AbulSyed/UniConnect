import { createContext, useReducer, useEffect } from 'react'

export default (reducer, actions, initialState) => {
  const Context = createContext()

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