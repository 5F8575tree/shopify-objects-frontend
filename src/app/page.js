"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getShopifyCollections } from "./services/api";

export default function Home() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    getShopifyCollections()
      .then(data => {
        console.log(data);
        setCollections(data.smart_collections);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <main className={styles.main}>
      <h1>Shopify Admin API</h1>
      <div className={styles.description}>
        <h2 className={styles.title}>Shopify Collections</h2>
        <div className={styles.collections}>
        {collections.map(collection => (
          <>
            <div className={styles.collection} key={collection.id}>
              <h3>{collection.handle}</h3>
              <div className={styles.databox}>
                <button>Direct Data</button>
                <button>Child Data</button>
              </div>
            </div>
          </>
        ))}
        </div>
      </div>
    </main>
  );
}
