import React from 'react';
import { Backdrop, CircularProgress, Typography } from '@mui/material';
import { LoaderStyles } from './LoaderStyles';
import { useLoader } from './hooks/useLoader';

const Loader = () => {
  const { show } = useLoader();
  const style = LoaderStyles;
  return (
    <Backdrop sx={style.root} open={show || false}>
      <CircularProgress />
    </Backdrop>
  );
};

export { Loader };
