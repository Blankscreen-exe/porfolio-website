import { createSlice } from "@reduxjs/toolkit";
import { toggleTheme } from "../actions/colorThemeActions";

const initialValue = {
    isDarkMode: false,
}

export const colorTheme = createSlice({
    name: "isDarkMode",
    initialState: initialValue,
    reducers: {
        // Register all action functions here, define them in ../actions/
        toggleThemeAction: toggleTheme
    }
});

export const { toggleThemeAction } = colorTheme.actions;
export default colorTheme.reducer;