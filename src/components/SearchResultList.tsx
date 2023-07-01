import {Grid} from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

import Loading from '@/components/Loading';
import NoMoreResults from '@/components/NoMoreResults';
import SearchResultItem from '@/components/SearchResultItem';

import {SearchResultListProps} from '@/types';

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
