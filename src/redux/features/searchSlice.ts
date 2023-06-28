import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface SearchResult {
  id: number;
  title: string;
  thumbnailUrl: string;
}

interface SearchState {
  searchText: string;
  results: SearchResult[];
  limit: number;
  min: number;
  max: number;
  step: number;
}

const initialState: SearchState = {
  searchText: '',
  results: [],
  limit: 50,
  min: 0,
  max: 5000,
  step: 10,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<SearchResult[]>) => {
      state.results = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
});

export const {setSearchText, setSearchResults, setLimit} = searchSlice.actions;

export default searchSlice.reducer;
