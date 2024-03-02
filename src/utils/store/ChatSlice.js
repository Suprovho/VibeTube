import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../constants";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },

  reducers: {
    addMessage: (state, action) => {
      state.message.splice(LIVE_CHAT_COUNT,1); // restrict length to 10 and remove 1 element from top on reaching 10..
      state.message.unshift(...action.payload); //push from back..
    },
  },
});

export const {addMessage}=ChatSlice.actions;
export default ChatSlice.reducer;
