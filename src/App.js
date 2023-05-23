import './App.css';
import { useState } from 'react';
import { Main } from './useEffect/Main';
import { Api } from './useEffect/Api';
import { Message } from './useEffect/Message';
import { SimpleForm } from './useEffect/SimpleForm';
import { FocusScreen } from './useRef/FocusScreen';
import { CountRef } from './useRef/CountRef';
import { MessageRef } from './useRef/MessageRef';

function App() {
  const [counter, setCounter] = useState(0);

  // const data = [
  //   { id: 1, name: 'Calors' },
  //   { id: 2, name: 'Juan' },
  // ];

  return (
    <div className="App">
      <h1>{JSON.stringify(counter)}</h1>
      <button onClick={() => setCounter(counter + 1)}>click</button>
      {/* <Main /> */}
      {/* <Api /> */}
      {/* <SimpleForm /> */}

      {/* useRef */}
      {/* <FocusScreen /> */}
      {/* <CountRef /> */}
      {/* <MessageRef /> */}
    </div>
  );
}

export default App;
