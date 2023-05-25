import React, { useMemo } from 'react';

export const Message = ({ texto }) => {
  //useMemo permite memorizar el valor que te regresa una función

  const getMessage = () => {
    console.log('getMessage');
    return `${texto}`;
  };

  const mensaje = useMemo(() => getMessage(), [texto]);

  return <div>{mensaje}</div>;
};
