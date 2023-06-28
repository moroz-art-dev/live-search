import {Box, Typography} from '@mui/material';

type FooterProps = {
  footerText: string;
};

const Footer = ({footerText}: FooterProps) => {
  return (
    <footer>
      <Box py={2} bgcolor='grey.200'>
        <Typography variant='body2' align='center'>
          {footerText}
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;