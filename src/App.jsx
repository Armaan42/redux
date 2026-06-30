import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseByFive, decrement, increaseByFive, increment, incrementByAmount, } from './redux/features/counterSlice'

const App = () => {
  // yeah button ke click pe joh action karne the vo keraga
  const dispatch = useDispatch() 

  // yeah counter ke value ko showcase karega current bali
  const count = useSelector((state) => state.counter.value) 

  const [num, setNum] = useState(5)

  return (
    <div>

      <h1>{count}</h1>

      <button onClick = {() => {
        dispatch(increment())
      }}>Increment</button>

      <button onClick={() => {
        dispatch(decrement())
      }} >Decrement</button>

      <button onClick={() => {
        dispatch(increaseByFive())
      }} >Increase by 5</button>

      <button onDoubleClick={() => {
        dispatch(decreaseByFive())
      }}>decrease By Five</button>

      <input type="number" value={num} onChange={(e) => {
        setNum(e.target.value);

      }} />
      <button onClick={() => {
        dispatch(incrementByAmount(Number(num)))
      }}>increment by Amount
      </button>
      
    </div>
  )
}

export default App
