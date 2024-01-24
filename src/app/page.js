"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getShopifyCollections, getShopifyProducts, getShopifyCollectionDetails } from "./services/api";
import Collections from "@/app/components/Collections";
import Products from '@/app/components/Products';
import CollectionProducts from '@/app/components/CollectionProducts';

export default function Home() {
  const [activeSection, setActiveSection] = useState('collections');
  const [collections, setCollections] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchCollectionDetails = async (collectionId) => {
    try {
      const details = await getShopifyCollectionDetails(collectionId);
      console.log(details);
    } catch (error) {
      console.error('Error fetching collection details:', error);
    }
  };

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
          <h2 onClick={() => handleSectionChange('collectionProducts')} className={getHeaderClass('collectionProducts')}>Collection Products</h2>
        </div>
        <div className={styles.content}>
          {activeSection === 'collections' && (
            <div>
              <Collections collections={collections} onFetchDetails={fetchCollectionDetails}/>
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
