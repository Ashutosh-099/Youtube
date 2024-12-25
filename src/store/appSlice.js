import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        showNavPanel: true,
        countryCode: "",
    },
    reducers: {
        toggleNavigationalPanel: (state) => {
            state.showNavPanel = !state.showNavPanel;
        },
        setCountryCode: (state, action) => {
            state.countryCode = action.payload;
        }
    }
});

export const { toggleNavigationalPanel, setCountryCode} = appSlice.actions;
export default appSlice.reducer;