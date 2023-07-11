import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

import fetchResults from '@/services/searchService';
import {SearchResult, SearchState, FetchSearchResultsArgs} from '@/types';

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

const fetchSearchResults = createAsyncThunk(
  'search/fetchSearchResults',
  async ({searchText, limit, page}: FetchSearchResultsArgs) => {
    return await fetchResults({searchText, limit, page});
  }
);

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
  extraReducers: builder => {
    builder.addCase(fetchSearchResults.fulfilled, (state, action) => {
      const data = action.payload;
      if (data.length < state.limit) state.hasMore = false;

      if (state.page > 1) {
        state.results = [...state.results, ...data];
      } else {
        state.results = data;
      }
    });
    builder.addCase(fetchSearchResults.rejected, (state, action) => {
      console.error('Error fetching data:', action.error);
      state.hasMore = false;
    });
    builder.addMatcher(
      action => action.type.startsWith('search/fetchSearchResults'),
      state => {
        console.error('Unhandled fetchSearchResults action:', state);
      }
    );
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

export {fetchSearchResults};

export default searchSlice.reducer;
