"use client";

import { createContext, useContext, useState } from 'react';

const ActiveQueryContext = createContext();

export const useActiveQuery = () => useContext(ActiveQueryContext);

export const ActiveQueryProvider = ({ children }) => {
  const [activeQuery, setActiveQuery] = useState('Shop');

  const updateActiveQuery = (queryName) => {
    setActiveQuery(queryName);
  };

  return (
    <ActiveQueryContext.Provider value={{ activeQuery, updateActiveQuery }}>
      {children}
    </ActiveQueryContext.Provider>
  );
};
