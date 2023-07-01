import {Box, Typography} from '@mui/material';

import {FooterProps} from '@/types';

const Footer = ({footerText}: FooterProps) => {
  return (
    <Box component='footer' py={2} bgcolor='grey.200'>
      <Typography variant='body2' align='center'>
        {footerText}
      </Typography>
    </Box>
  );
};

export default Footer;
