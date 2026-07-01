import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        value: ''
    },
    reducers: {
        setsearch: (state) => {
            state.value = state
        }
    }
})