import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: {},
    searchKey: null,
  },
  reducers: {
    addSearchResults: (state, action) => {
      state.results = Object.assign(state.results, action.payload);
    },
    setSearchKey: (state, action) => {
      state.searchKey = action.payload;
    },
  },
});

export const { addSearchResults, setSearchKey } = searchSlice.actions;
export default searchSlice.reducer;
