import React, { useContext } from 'react'
import { CounterContext } from '../store/context.js'

export default () => {
  const [, dispatch] = useContext(CounterContext)

  return (
    <>
      <button onClick={() => dispatch({ type: 'START' })}>loading</button>
      <button onClick={() => dispatch({ type: 'END' })}>unloading</button>
    </>
  )
}
