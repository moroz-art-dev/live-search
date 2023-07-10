import {
  offHasMore,
  setSearchResults,
  updateSearchResults,
} from '@/redux/features/searchSlice';

export async function fetchSearchResults(
  searchText: string,
  limit: number,
  page: number,
  dispatch: any
) {
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
}
