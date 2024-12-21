import { createSlice } from "@reduxjs/toolkit";


const appSlice=createSlice({
    name: 'app',
    initialState:{
        isMenuOpen:false,
        SearchMenu:"",
        isSearchbuttonPressed:false,
    },
    reducers: {
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },

        closeMenu:(state)=>{
          state.isMenuOpen=false;
        },

        setSearchName:(state,action)=>{
             state.SearchMenu=action.payload;
        },

        setSearchCall:(state,action)=>{
          state.isSearchbuttonPressed=!state.isSearchbuttonPressed;
        },
    },
});
export const {toggleMenu,closeMenu,setSearchName,setSearchCall}=appSlice.actions;
export default appSlice.reducer;