import React, { useMemo, useState } from 'react';
import { LoaderContext } from './LoaderContext';

const LoaderProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('HOLA MUNDO');

  const contextValue = useMemo(
    () => ({
      show,
      text,
      handleShowLoader: setShow,
      setText,
    }),
    [show, text]
  );

  return (
    <LoaderContext.Provider value={contextValue}>
      {children}
    </LoaderContext.Provider>
  );
};

export { LoaderProvider };
