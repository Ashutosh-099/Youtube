import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        showNavPanel: true,
    },
    reducers: {
        toggleNavigationalPanel: (state) => {
            state.showNavPanel = !state.showNavPanel;
        }
    }
});

export const { toggleNavigationalPanel } = appSlice.actions;
export default appSlice.reducer;