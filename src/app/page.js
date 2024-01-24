"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getShopifyCollections, getShopifyProducts } from "./services/api";
import Collections from "@/components/Collections";
import Products from '@/components/Products';
import CollectionProducts from '@/components/CollectionProducts';

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

  return (
    <main className={styles.main}>
      <h1>Shopify Admin API</h1>
      <div className={styles.description}>
        <div className={styles.navigation}>
          <h2 onClick={() => handleSectionChange('collections')} className={styles.title}>Shopify Collections</h2>
          <h2 onClick={() => handleSectionChange('products')} className={styles.title}>Shopify Products</h2>
          <h2 onClick={() => handleSectionChange('collectionProducts')} className={styles.title}>Collection Products</h2>
        </div>
        <div className={styles.content}>
          {activeSection === 'collections' && (
            <div>
              <Collections collections={collections} />
            </div>
          )}
          {activeSection === 'products' && (
            <div>
              <Products products={products} />
            </div>
          )}
          {activeSection === 'collectionProducts' && (
            <div>
              <CollectionProducts collectionProducts={collectionProducts} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
