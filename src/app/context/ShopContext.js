"use client";

import { createContext, useContext, useState } from 'react';
import { getShop } from '@/app/services/api';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [shop, setShop] = useState([]);

  const fetchShop = async () => {
    const data = await getShop();
    setShop(data);
  };

  return (
    <ShopContext.Provider value={{ shop, fetchShop }}>
      {children}
    </ShopContext.Provider>
  );
};
