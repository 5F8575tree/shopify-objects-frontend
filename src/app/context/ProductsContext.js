"use client";

import { createContext, useContext, useState } from 'react';
import { getStorefrontProducts } from '@/app/services/api';

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await getStorefrontProducts();
    setProducts(data);
  };

  return (
    <ProductsContext.Provider value={{ products, fetchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
