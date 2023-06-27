import {TextField} from '@mui/material';
import {useState} from 'react';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form>
      <TextField
        label='Search'
        variant='outlined'
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchForm;
