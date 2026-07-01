import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
        activeTab: 'photos',
        results: [],
        loading: false,
        error: null
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload
        },
        setActiveTabs: (sate, action) => {
            state.activeTab = action.payload
        },
        setResults: (state, action) => {
            state.results = action.payload
        },
        setLoading: (state, action) => {
            state.results = action.payload
        },
        setError: (state, action) => {
            state.results = action.payload
        },
    }
})

export const {setQuery, setActiveTabs, setActiveTabs, setError, setResults} = searchSlice.actions
export default searchSlice.reducer