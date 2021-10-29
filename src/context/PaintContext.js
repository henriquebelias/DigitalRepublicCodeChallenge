import React, { createContext, useState } from 'react';

export const PaintContext = createContext();

export function PaintProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [wallHeigth, setWallHeigth] = useState(0);

  const calcTotal = (value) => {
    setTotal(total + value)
  }

  const updateHeigth = ({ target: { value } }) => {
    setWallHeigth(+value);
  };

  const contextValue = {
    total,
    wallHeigth,
    calcTotal,
    updateHeigth,
  };

  return (
    <PaintContext.Provider value={ contextValue }>
      { children }
    </PaintContext.Provider>
  );
}
