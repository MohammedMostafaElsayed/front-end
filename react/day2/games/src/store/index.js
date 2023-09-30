import { configureStore } from "@reduxjs/toolkit";
import x from "./slice/counter";

export default configureStore({
    reducer:{
        counter : x

    }
});