import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
     
    name: 'videos',
    initialState:{
        videoData:null,
        channelData:null,
    },
    reducers:{
       getVideoData:(state,action)=>{
           state.videoData = action.payload;
       },
       getChannelData:(state,action)=>{
         state.channelData = action.payload;
       },
       
    },

});

export const {getVideoData,getChannelData}=videoSlice.actions;
export default videoSlice.reducer;