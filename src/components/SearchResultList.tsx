import {Grid} from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

import Loading from '@/components/Loading';
import NoMoreResults from '@/components/NoMoreResults';
import Preview from '@/components/Preview';
import SearchResultItem from '@/components/SearchResultItem';
import {useAppSelector} from '@/redux/hooks';

import {SearchResultListProps} from '@/types';

const SearchResultList: React.FC<SearchResultListProps> = ({
  results,
  hasMore,
  loadMore,
}) => {
  const {searchText} = useAppSelector(state => state.search);
  return (
    <InfiniteScroll
      dataLength={results.length}
      next={loadMore}
      hasMore={hasMore}
      loader={searchText ? <Loading /> : <Preview />}
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
