import {Slider, Typography, Box} from '@mui/material';
import React from 'react';

import {setLimit} from '../redux/features/searchSlice';
import {useAppDispatch, useAppSelector} from '../redux/hooks';

const LimitSlider: React.FC = () => {
  const dispatch = useAppDispatch();
  const {min, max, step, limit} = useAppSelector(state => state.search);

  const handleChange = (
    event: Event,
    newValue: number | number[] | null,
    activeThumb: number
  ) => {
    if (typeof newValue === 'number') {
      dispatch(setLimit(newValue));
    }
  };

  return (
    <Box sx={{marginLeft: '20px', marginRight: '20px'}}>
      <Typography variant='body1' gutterBottom>
        Limit: {limit}
      </Typography>
      <Slider
        value={limit}
        onChange={handleChange}
        aria-labelledby='continuous-slider'
        min={min}
        max={max}
        step={step}
      />
    </Box>
  );
};

export default LimitSlider;
