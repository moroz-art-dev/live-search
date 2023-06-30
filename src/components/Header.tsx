import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import LimitSlider from './LimitSlider';

import SearchForm from '../components/SearchForm';

type HeaderProps = {
  logoText: string;
};

const Header = ({logoText}: HeaderProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar sx={{position: 'sticky', marginBottom: 2, top: 0}}>
      <Toolbar sx={{padding: '10px'}}>
        {!isSmallScreen && (
          <Typography
            variant='h4'
            component='div'
            sx={{flexGrow: 1, color: theme.palette.info.main}}
          >
            {logoText}
          </Typography>
        )}
        <LimitSlider />
        <SearchForm />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
