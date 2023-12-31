import {Card, CardContent, CardMedia, Typography} from '@mui/material';
import React from 'react';

import {useAppSelector} from '@/redux/hooks';

import {SearchResultItemProps} from '@/types';

const SearchResultItem: React.FC<SearchResultItemProps> = ({result}) => {
  const searchText = useAppSelector(state => state.search.searchText);
  const regex = new RegExp(`(${searchText})`, 'gi');
  const highlightedTitle = result.title.replace(
    regex,
    '<span style="background-color: yellow;">$1</span>'
  );

  return (
    <Card style={{height: '100%'}}>
      <CardMedia
        component='img'
        height={150}
        image={result.thumbnailUrl}
        alt={result.title}
      />
      <CardContent>
        <Typography
          variant='subtitle1'
          component='div'
          dangerouslySetInnerHTML={{__html: highlightedTitle}}
        />
      </CardContent>
    </Card>
  );
};

export default SearchResultItem;
