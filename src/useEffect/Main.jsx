import React, { useEffect, useState } from 'react';

const Main = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('RENDER!!');
  }, [counter]);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </div>
  );
};

export { Main };
