'use client';

import {TextField, useTheme} from '@mui/material';
import {useEffect, useRef} from 'react';

import {setSearchText, setSearchResults} from '../redux/features/searchSlice';
import {useAppDispatch, useAppSelector} from '../redux/hooks';

const SearchForm = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const {searchText, limit} = useAppSelector(state => state.search);

  const controllerRef = useRef<AbortController | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchData = async () => {
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

    if (controllerRef.current) {
      controllerRef.current.abort();
      controllerRef.current = null;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      fetchData();
      timeoutRef.current = null;
    }, 500);

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
        variant='filled'
        value={searchText}
        onChange={handleChange}
        InputLabelProps={{
          style: {
            color: theme.palette.primary.main,
          },
        }}
        sx={{
          backgroundColor: theme.palette.background.default,
          borderColor: theme.palette.info.main,
        }}
      />
    </form>
  );
};

export default SearchForm;
