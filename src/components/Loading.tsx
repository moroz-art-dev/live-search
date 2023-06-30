import {Box, CircularProgress} from '@mui/material';

const Loading = () => {
  return (
    <Box display='flex' justifyContent='center' mt={3} sx={{height: '50px'}}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
