import React, { createContext } from 'react';

export const PaintContext = createContext();

export function PaintProvider({ children }) {
  return (
    <PaintContext.Provider value={ {} }>
      { children }
    </PaintContext.Provider>
  );
}
