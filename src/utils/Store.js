import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import ChatSlice from "./ChatSlice";
import SearchSlice from "./SearchSlice";


const Store = configureStore({


    reducer:{
        app: AppSlice,
        chat:ChatSlice,
        search:SearchSlice,
    },

});

export default Store;