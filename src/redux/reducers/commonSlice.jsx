import { createSlice } from "@reduxjs/toolkit";
import { increaseValue, decreaseValue } from "../actions/commonActions";

export const commonSlice = createSlice({
    name: "common",
    initialState: {
        myValue: 10,
    },
    reducers: {
        // Register all action functions here, define them in ../actions/
        increment: increaseValue,
        decrement: decreaseValue
    }
});

export const { increment, decrement } = commonSlice.actions;
export default commonSlice.reducer;