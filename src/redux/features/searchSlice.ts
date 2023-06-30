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
  page: number;
  hasMore: boolean;
}

const initialState: SearchState = {
  searchText: '',
  results: [],
  limit: 24,
  min: 12,
  max: 5000,
  step: 12,
  page: 1,
  hasMore: true,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    nextPage: state => {
      state.page += 1;
    },
    setSearchResults: (state, action: PayloadAction<SearchResult[]>) => {
      state.results = action.payload;
    },
    updateSearchResults: (state, action: PayloadAction<SearchResult[]>) => {
      state.results = [...state.results, ...action.payload];
    },
    onHasMore: state => {
      state.hasMore = true;
    },
    offHasMore: state => {
      state.hasMore = false;
    },
  },
});

export const {
  setSearchText,
  setLimit,
  setPage,
  nextPage,
  setSearchResults,
  updateSearchResults,
  onHasMore,
  offHasMore,
} = searchSlice.actions;

export default searchSlice.reducer;
