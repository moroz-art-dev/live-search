'use client';

import {Box, TextField, useTheme, useMediaQuery} from '@mui/material';

import {setSearchText, onHasMore, setPage} from '../redux/features/searchSlice';
import {useAppDispatch, useAppSelector} from '../redux/hooks';

const SearchForm = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const {searchText} = useAppSelector(state => state.search);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;

    dispatch(setPage(1));
    dispatch(onHasMore());
    dispatch(setSearchText(newSearchTerm));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Box sx={{width: isSmallScreen ? '100%' : '25%'}}>
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
            width: '100%',
            backgroundColor: theme.palette.background.default,
            borderColor: theme.palette.info.main,
          }}
        />
      </form>
    </Box>
  );
};

export default SearchForm;
