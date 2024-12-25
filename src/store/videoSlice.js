import { createSlice } from "@reduxjs/toolkit";

const CACHE_MAX_LENGTH = 10;

const videoSlice = createSlice({
    name: "videos",
    initialState: {
        youtubeVideos: [],
        suggestionsCache: {},
    },
    reducers: {
        setYoutubeVideos: (state, action) => {
            state.youtubeVideos = action.payload;
        },
        addCache: (state, action) => {
            const cacheLen = Object.keys(state.suggestionsCache).length;
            if (cacheLen >= CACHE_MAX_LENGTH) {
                const firstCache = Object.keys(state.suggestionsCache)[0];
                delete state.suggestionsCache[firstCache];
            }
            state.suggestionsCache = { ...state.suggestionsCache, ...action.payload };
        },
        removeCache: (state, action) => {
            delete state.suggestionsCache[action.payload];
        }
    }
});

export const { setYoutubeVideos, addCache, removeCache } = videoSlice.actions;
export default videoSlice.reducer;