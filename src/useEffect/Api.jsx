import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Grid, Typography } from '@mui/material';

const Api = () => {
  const [data, setData] = useState([]);
  useEffect(
    () => {
      //frist
      axios
        .get('https://rickandmortyapi.com/api/character')
        .then((response) => setData(response.data.results));
    },
    [
      //segunda
    ]
  );

  console.log('DATA', data);

  return (
    <div>
      <Typography>API EJERCICIO</Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {data.map((persons) => (
          <Grid item>
            <Card sx={{ p: 2 }}>{persons.name}</Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export { Api };
