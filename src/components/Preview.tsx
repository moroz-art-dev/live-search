import {Typography, Box} from '@mui/material';

const Preview = () => {
  return (
    <Box display='flex' justifyContent='center' mt={3} sx={{padding: '10px'}}>
      <Typography variant='body1' align='center' fontSize='1.2rem'>
        <br />
        Welcome to the LiveSearch Project!
        <br />
        <br />
        Enter your search query and experience the demo.
        <br />
        It fetches a list of images from jsonplaceholder.
        <br />
        Adjust the Limit slider to control the number of items loaded at once.
      </Typography>
    </Box>
  );
};

export default Preview;
