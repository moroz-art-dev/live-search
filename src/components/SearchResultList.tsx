import {Grid} from '@mui/material';

import SearchResultItem, {SearchResult} from './SearchResultItem';

interface SearchResultListProps {
  results: SearchResult[];
}

const SearchResultList: React.FC<SearchResultListProps> = ({results}) => {
  return (
    <Grid container spacing={2}>
      {results.map(result => (
        <Grid item key={result.id} xs={12} sm={6} md={4} lg={3}>
          <SearchResultItem result={result} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchResultList;
