import {
  offHasMore,
  setSearchResults,
  updateSearchResults,
} from '@/redux/features/searchSlice';

import {FetchSearchResultsArgs} from '@/types';

export const fetchSearchResults = async ({
  searchText,
  limit,
  page,
  dispatch,
}: FetchSearchResultsArgs) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?q=${searchText}&_limit=${limit}&_page=${page}`
    );
    const data = await res.json();

    if (data.length < limit) dispatch(offHasMore());

    if (page > 1) dispatch(updateSearchResults(data));
    else dispatch(setSearchResults(data));
  } catch (error) {
    dispatch(offHasMore());
    console.error('Error fetching data:', error);
  }
};
