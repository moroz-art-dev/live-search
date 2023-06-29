import {AppBar, Toolbar, Typography, useTheme} from '@mui/material';

import LimitSlider from './LimitSlider';

import SearchForm from '../components/SearchForm';

type HeaderProps = {
  logoText: string;
};

const Header = ({logoText}: HeaderProps) => {
  const theme = useTheme();
  return (
    <AppBar position='static' sx={{marginBottom: 2}}>
      <Toolbar sx={{padding: '10px'}}>
        <Typography
          variant='h6'
          component='div'
          sx={{flexGrow: 1, color: theme.palette.success.main}}
        >
          {logoText}
        </Typography>
        <LimitSlider />
        <SearchForm />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
