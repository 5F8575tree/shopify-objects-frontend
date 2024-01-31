"use client";

import { createContext, useContext, useState } from 'react';

const ActiveApiContext = createContext();

export function useActiveApi() {
  return useContext(ActiveApiContext);
}

export function ActiveApiProvider({ children }) {
  const [activeApi, setActiveApi] = useState('StorefrontApi');

  return (
    <ActiveApiContext.Provider value={{ activeApi, setActiveApi }}>
      {children}
    </ActiveApiContext.Provider>
  );
}
