import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
    name: "mapData",
    initialState: {countryData: []},
    reducers:{
        addCountryData(state, action){
            state.countryData = action.payload.countryData;
        }
    }
})

export const mapActions = mapSlice.actions;
export default mapSlice;