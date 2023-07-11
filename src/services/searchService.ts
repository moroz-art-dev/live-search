import {FetchSearchResultsArgs} from '@/types';

const fetchResults = async ({
  searchText,
  limit,
  page,
}: FetchSearchResultsArgs) => {
  const url = `https://jsonplaceholder.typicode.com/photos?q=${searchText}&_limit=${limit}&_page=${page}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Error fetching data');
  }

  const data = await res.json();
  return data;
};

export default fetchResults;
