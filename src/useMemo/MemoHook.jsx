import { useState } from 'react';
import { Typography, Button } from '@mui/material';
import { Message } from './Message';

export const MemoHook = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Typography variant="h2">MemoHook</Typography>
      <br />
      <Message texto="Hola hola" />
      <br />
      <h3>{counter}</h3>
      <Button variant="contained" onClick={() => setCounter(counter + 1)}>
        Click
      </Button>
    </div>
  );
};
