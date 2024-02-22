import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    CacheResults: (state, action) => {
      state = Object.assign(state,action.payload);
    },
  },
});

export const { CacheResults } = SearchSlice.actions;

export default SearchSlice.reducer;


//! LRU caching 