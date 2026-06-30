import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        value: 0
    },
    reducers:{
        increment:(state) => {
            state.value += 1
        },
        decrement:(state) => {
            state.value -= 1
        },
        increaseByFive:(state) => {
            state.value += 5
        },
        decreaseByFive:(state) => {
            state.value -= 5
        },
        incrementByAmount:(state, actions) => {
            state.value += actions.payload
        }
    }
})

export const {increment, decrement, increaseByFive, decreaseByFive, incrementByAmount} = counterSlice.actions
export default counterSlice.reducer
