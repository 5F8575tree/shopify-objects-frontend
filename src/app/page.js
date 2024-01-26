"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getShopifyCollections, getShopifyProducts } from "./services/api";
import Collections from "@/app/components/Collections";
import Products from '@/app/components/Products';

export default function Home() {
  const [activeSection, setActiveSection] = useState('collections');
  const [collections, setCollections] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getShopifyCollections()
      .then(data => {
        console.log(data);
        setCollections(data.smart_collections);
      })
      .catch(error => console.log(error));

    getShopifyProducts()
      .then(data => {
        console.log(data);
        setProducts(data.products);
      })
      .catch(error => console.log(error));
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  }

  const getHeaderClass = (section) => {
    return `${styles.title} ${activeSection === section ? styles.activeSection : ''}`;
  }

  return (
    <main className={styles.main}>
      <h1>Shopify Admin API</h1>
      <div className={styles.description}>
        <div className={styles.navigation}>
          <h2 onClick={() => handleSectionChange('collections')} className={getHeaderClass('collections')}>Shopify Collections</h2>
          <h2 onClick={() => handleSectionChange('products')} className={getHeaderClass('products')}>Shopify Products</h2>
        </div>
        <div className={styles.content}>
          {activeSection === 'collections' && (
            <Collections collections={collections} />
          )}
          {activeSection === 'products' && (
            <Products products={products} />
          )}
        </div>
      </div>
    </main>
  );
}
