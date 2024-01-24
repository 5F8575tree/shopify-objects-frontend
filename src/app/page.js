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
      <div className={styles.description}>
        <h1 className={styles.title}>Shopify Collections:</h1>
        {collections.map(collection => (
          <div className={styles.collection} key={collection.id}>{collection.handle}</div>
        ))}
      </div>
    </main>
  );
}
