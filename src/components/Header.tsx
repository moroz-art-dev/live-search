import {AppBar, Toolbar, Typography} from '@mui/material';

import SearchForm from '../components/SearchForm';

type HeaderProps = {
  logoText: string;
};

const Header = ({logoText}: HeaderProps) => {
  return (
    <header>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
            {logoText}
          </Typography>
          <SearchForm />
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
