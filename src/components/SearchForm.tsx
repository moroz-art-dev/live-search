import {TextField} from '@mui/material';
import {useEffect} from 'react';

import {setSearchText, setSearchResults} from '../redux/features/searchSlice';
import {useAppDispatch, useAppSelector} from '../redux/hooks';

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const {searchText, limit} = useAppSelector(state => state.search);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/photos?q=${searchText}&_limit=${limit}`
        );
        const data = await res.json();
        console.log(data);
        dispatch(setSearchResults(data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchText, limit, dispatch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    dispatch(setSearchText(newSearchTerm));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='Search'
        variant='outlined'
        value={searchText}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchForm;
