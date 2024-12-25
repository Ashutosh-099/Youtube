import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import videoReducer from "./videoSlice";
import chatReducer from "./chatSlice";

const appStore = configureStore({
    reducer: {
        app: appReducer,
        video: videoReducer,
        chat: chatReducer,
    }
});

export default appStore;