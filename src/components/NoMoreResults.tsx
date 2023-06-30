import {Typography, Box} from '@mui/material';

const NoMoreResults = () => {
  return (
    <Box display='flex' justifyContent='center' mt={3} sx={{height: '50px'}}>
      <Typography variant='body2' align='center'>
        No more results
      </Typography>
    </Box>
  );
};

export default NoMoreResults;
