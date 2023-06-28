import {AppBar, Toolbar, Typography} from '@mui/material';

import LimitSlider from './LimitSlider';

import SearchForm from '../components/SearchForm';

type HeaderProps = {
  logoText: string;
};

const Header = ({logoText}: HeaderProps) => {
  return (
    <AppBar position='static'>
      <Toolbar sx={{padding: '10px'}}>
        <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
          {logoText}
        </Typography>
        <LimitSlider />
        <SearchForm />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
