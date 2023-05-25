import './App.css';
import { useState } from 'react';
import { Main } from './useEffect/Main';
import { Api } from './useEffect/Api';
import { Message } from './useEffect/Message';
import { SimpleForm } from './useEffect/SimpleForm';
import { FocusScreen } from './useRef/FocusScreen';
import { CountRef } from './useRef/CountRef';
import { MessageRef } from './useRef/MessageRef';
import { MemoHook } from './useMemo/MemoHook';
import { Loader } from './useContext';
import { Button, Typography } from '@mui/material';
import { useLoader } from './useContext/hooks/useLoader';

function App() {
  const [counter, setCounter] = useState(0);
  const { handleShowLoader, show, text, setText } = useLoader();

  // const data = [
  //   { id: 1, name: 'Calors' },
  //   { id: 2, name: 'Juan' },
  // ];

  const changeLoader = () => {
    handleShowLoader(true);

    setTimeout(() => {
      handleShowLoader(false);
    }, 1000);
  };

  return (
    <div className="App">
      {/* <h1>{JSON.stringify(counter)}</h1> */}
      {/* <button onClick={() => setCounter(counter + 1)}>click</button> */}

      {/*useEffect*/}
      {/* <Main /> */}
      {/* <Api /> */}
      {/* <SimpleForm /> */}

      {/* useRef */}
      {/* <FocusScreen /> */}
      {/* <CountRef /> */}
      {/* <MessageRef /> */}

      {/*useMemo*/}
      {/* <MemoHook /> */}

      {/*useContext*/}
      <Loader />
      <Typography variant="h3">useContext</Typography>
      <Typography>{text}</Typography>
      <Button
        variant="contained"
        onClick={() => setText('ESTO ES TODO DE USECONTEXT')}
      >
        TEXTO
      </Button>
      <Button sx={{ mt: 2 }} variant="contained" onClick={() => changeLoader()}>
        Loader
      </Button>
    </div>
  );
}

export default App;
