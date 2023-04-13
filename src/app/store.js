import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "@/features/likeSlice";

export default configureStore({
    reducer: {
        favoris: likeReducer
    }
})