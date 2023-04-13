import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "@/features/likeSlice";
import logReducer from "@/features/logSlice";

export default configureStore({
    reducer: {
        favoris: likeReducer,
        log: logReducer,
    }
})