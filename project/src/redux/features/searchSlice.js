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
        setActiveTabs: (state, action) => {
            state.activeTab = action.payload
        },
        setResults: (state, action) => {
            state.results = action.payload
            state.loading = false // when the results comes the loading needs to be false
        },
        setLoading: (state) => {
            state.results = true
            state.error = null // when loading chal rhi hain us time pe kaise error aya sakta hain impossible
        },
        setError: (state, action) => {
            state.results = action.payload
            state.loading = false // jab error show hoga to loading automatically false ho jayegi
        },
        clearResults: (state, action) => {
            state.results = []
        };
    };
});

export const {setQuery, setActiveTabs, setError, setResults, clearResults} = searchSlice.actions

export default searchSlice.reducer