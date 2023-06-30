import {Grid} from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

import Loading from './Loading';
import NoMoreResults from './NoMoreResults';
import SearchResultItem from './SearchResultItem';

import {SearchResult} from '../redux/features/searchSlice';

interface SearchResultListProps {
  results: SearchResult[];
  hasMore: boolean;
  loadMore: () => void;
}

const SearchResultList: React.FC<SearchResultListProps> = ({
  results,
  hasMore,
  loadMore,
}) => {
  return (
    <InfiniteScroll
      dataLength={results.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<Loading />}
      endMessage={<NoMoreResults />}
    >
      <Grid container spacing={2}>
        {results.map(result => (
          <Grid item key={result.id} xs={12} sm={6} md={3} lg={2}>
            <SearchResultItem result={result} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default SearchResultList;
