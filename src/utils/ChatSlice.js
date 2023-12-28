import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./Constants";

const ChatSlice = createSlice({
    name:"chat",
    initialState:{
        message:[],
    },
    reducers:{
        addMessage: (state,action)=>{
            state.message.splice(LIVE_CHAT_COUNT, 1);
            state.message.push(action.payload);

        },
    },
});



export const{addMessage}= ChatSlice.actions;
export default ChatSlice.reducer;