import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    rides: [],
    selectedState: null,
    selectedCity: null
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
        },
        addRides: (state, action) => {
            state.rides = action.payload
        },
        selectState: (state, action) => {
            state.selectedState = action.payload
        },
        selectCity: (state, action) => {
            state.selectedCity = action.payload
        },
        resetState: (state) => {
            state.selectedState = initialState.selectedState
        },
        resetCity: (state) => {
            state.selectedCity = initialState.selectedCity
        }
    }
})

export const { addRides, addUser, selectCity, selectState, resetCity, resetState } = dataSlice.actions
export default dataSlice.reducer