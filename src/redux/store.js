import { configureStore } from "@reduxjs/toolkit";
import iconsSlice from "./iconsSlice";

export const store = configureStore({
    reducer: {
        icons: iconsSlice
    },
})