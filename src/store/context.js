import React, { useReducer, createContext } from 'react'

export const CounterContext = createContext()

const initialState = {
  loading: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'START':
      return {
        loading: true,
      }
    case 'END':
      return {
        loading: false,
      }
    default:
      throw new Error()
  }
}

export const StateProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CounterContext.Provider value={[state, dispatch]}>
      {props.children}
    </CounterContext.Provider>
  )
}
