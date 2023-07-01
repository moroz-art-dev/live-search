import createCache from '@emotion/cache';
import {CacheProvider} from '@emotion/react';
import {ThemeProvider as EmotionThemeProvider} from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import React from 'react';

import theme from '@/theme';

const cache = createCache({key: 'css', prepend: true});

const CustomThemeProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <CacheProvider value={cache}>
      <EmotionThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </EmotionThemeProvider>
    </CacheProvider>
  );
};

export default CustomThemeProvider;
