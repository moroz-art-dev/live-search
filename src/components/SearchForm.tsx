import {TextField} from '@mui/material';
import {useEffect, useRef} from 'react';

import {setSearchText, setSearchResults} from '../redux/features/searchSlice';
import {useAppDispatch, useAppSelector} from '../redux/hooks';

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const {searchText, limit} = useAppSelector(state => state.search);

  const controllerRef = useRef<AbortController | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // Create a new instance of AbortController
      const controller = new AbortController();
      controllerRef.current = controller;

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/photos?q=${searchText}&_limit=${limit}`,
          {signal: controller.signal}
        );
        const data = await res.json();
        console.log(data);
        dispatch(setSearchResults(data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Cancel the previous request and reset the current controller
    if (controllerRef.current) {
      controllerRef.current.abort();
      controllerRef.current = null;
    }

    // Cancel the previous timeout, if any
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout to execute the request after 500ms
    timeoutRef.current = setTimeout(() => {
      fetchData();
      timeoutRef.current = null; // Reset the current timeout
    }, 500);

    // Clear the timeout and controller on component unmount
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
        controllerRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
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
