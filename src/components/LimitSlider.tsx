import {Slider, Typography, Box, useTheme} from '@mui/material';

import React from 'react';

import {setLimit, setPage, onHasMore} from '@/redux/features/searchSlice';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';

const LimitSlider: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const {min, max, step, limit} = useAppSelector(state => state.search);

  const handleChange = (
    event: Event,
    newValue: number | number[] | null,
    activeThumb: number
  ) => {
    if (typeof newValue === 'number') {
      dispatch(onHasMore());
      dispatch(setPage(1));
      dispatch(setLimit(newValue));
    }
  };

  return (
    <Box sx={{marginLeft: '20px', marginRight: '20px', width: '30%'}}>
      <Typography
        variant='body1'
        gutterBottom
        sx={{color: theme.palette.secondary.main}}
      >
        Limit: {limit}
      </Typography>
      <Slider
        value={limit}
        onChange={handleChange}
        aria-labelledby='continuous-slider'
        min={min}
        max={max}
        step={step}
        sx={{
          color: theme.palette.secondary.main,
          width: '100%',
        }}
      />
    </Box>
  );
};

export default LimitSlider;
