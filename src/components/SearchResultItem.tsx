import {Card, CardContent, CardMedia, Typography} from '@mui/material';

export interface SearchResult {
  id: number;
  title: string;
  imageUrl: string;
}

interface SearchResultItemProps {
  result: SearchResult;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({result}) => {
  return (
    <Card>
      <CardMedia
        component='img'
        height='140'
        image={result.imageUrl}
        alt={result.title}
      />
      <CardContent>
        <Typography variant='subtitle1' component='div'>
          {result.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SearchResultItem;
