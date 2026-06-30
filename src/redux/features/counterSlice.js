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
        }
    }
})

export const {increment, decrement, increaseByFive, decreaseByFive} = counterSlice.actions
export default counterSlice.reducer
