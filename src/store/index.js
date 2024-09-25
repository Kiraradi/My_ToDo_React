import { configureStore } from "@reduxjs/toolkit";
import todoReduser from "./todoSlise";

export const store = configureStore({
    reducer:{
        todo: todoReduser
    }
})