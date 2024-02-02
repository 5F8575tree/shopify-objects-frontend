"use client";

import { createContext, useContext, useState } from 'react';
import { getStorefrontCollections } from '@/app/services/api';

const CollectionsContext = createContext();

export const useCollections = () => useContext(CollectionsContext);

export const CollectionsProvider = ({ children }) => {
  const [collections, setCollections] = useState([]);

  const fetchCollections = async () => {
    const data = await getStorefrontCollections();
    setCollections(data);
  };

  return (
    <CollectionsContext.Provider value={{ collections, fetchCollections }}>
      {children}
    </CollectionsContext.Provider>
  );
};
