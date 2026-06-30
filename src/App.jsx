import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {

  // yeah button ke click pe joh action karne the vo keraga
  const dispatch = useDispatch() 

  // yeah counter ke value ko showcase karega current bali
  const count = useSelector((state) => state.counter.value) 

  return (
    <div>

      <h1>{count}</h1>

      <button onClick = {() => {

      }}>Increment</button>

      <button onClick={() => {

      }} >Decrement</button>

    </div>
  )
}

export default App
