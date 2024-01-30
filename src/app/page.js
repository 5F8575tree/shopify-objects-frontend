"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getShopifyCollections, getShopifyProducts, getStorefrontCollections, getStorefrontProducts } from "./services/api";
import Collections from "@/app/components/Collections";
import Products from '@/app/components/Products';
import InfoCards from "@/app/components/InfoCards";
import StorefrontCollections from "./components/StorefrontCollections";
import StorefrontProducts from "./components/StorefrontProducts";

const titleSection = [
  {
    title: "Shopify Admin API",
    content: "Use the Admin API for backend development. JavaScript and Node.js work great, but Ruby, Python, and PHP are other good choices."
  },
  {
    title: "Shopify Storefront API",
    content: "Use Liquid and the schema to customise the theme front-end and the theme editor experience."
  }
]

export default function Home() {
  const [activeSection, setActiveSection] = useState('collections');
  const [collections, setCollections] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showCards, setShowCards] = useState(false);
  const [storefrontProducts, setStorefrontProducts] = useState([]);
  const [storefrontCollections, setStorefrontCollections] = useState([]);
  const [showIntrospection, setShowIntrospection] = useState(false);
  const [introspectionData, setIntrospectionData] = useState(null);

  const fetchIntrospectionData = async () => {
    try {
      const response = await fetch('http://localhost:3001/storefront/introspection');
      if (!response.ok) {
        throw new Error('Failed to fetch introspection data');
      }
      const data = await response.json();
      setIntrospectionData(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error fetching introspection data:', error);
    }
  };

  const handleToggleIntrospection = () => {
    setShowIntrospection(!showIntrospection);
    if (!showIntrospection && !introspectionData) { // Fetch data only if it hasn't been fetched yet
      fetchIntrospectionData();
    }
  }

  const handleToggleCards = () => {
    setShowCards(!showCards);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const shopifyCollections = getShopifyCollections();
        const shopifyProducts = getShopifyProducts();
        // Fetch both Shopify and Storefront data in parallel for efficiency
        const [shopifyCollectionsData, shopifyProductsData] = await Promise.all([shopifyCollections, shopifyProducts]);

        // Update state with Shopify data
        setCollections(shopifyCollectionsData.smart_collections);
        setProducts(shopifyProductsData.products);

        // Fetch Storefront data if the active section requires it
        if (activeSection === 'storefrontCollections' || activeSection === 'storefrontProducts') {
          const storefrontCollectionsData = await getStorefrontCollections();
          const storefrontProductsData = await getStorefrontProducts();
          console.log(storefrontCollectionsData);

          setStorefrontCollections(storefrontCollectionsData);
          setStorefrontProducts(storefrontProductsData);
        }
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, [activeSection]); // Dependency array ensures useEffect is called when activeSection changes


  const handleHeaderClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  }

  const getHeaderClass = (section) => {
    return `${styles.title} ${activeSection === section ? styles.activeSection : ''}`;
  }

  return (
    <main className={styles.main}>
      <div className={styles.infoBox}>
        <div className={styles.headers}>
          {titleSection.map((section, index) => (
            <h1
              key={index}
              className={`${styles.headerTitle} ${index === activeIndex ? styles.activeTitle : ""}`}
              onClick={() => handleHeaderClick(index)}
            >
              {section.title}
            </h1>
          ))}
        </div>
        {titleSection.map((section, index) => (
          <div
            key={index}
            className={`${styles.contents} ${index === activeIndex ? styles.showContent : ""}`}
          >
            <p>{section.content}</p>
          </div>
        ))}
        <div className={styles.showCardsWrapper}>
          <button className={styles.showCardsBtn} onClick={handleToggleCards}>
            {showCards ? "Hide Details" : "View More"}
          </button>
          <button className={styles.showCardsBtn} onClick={handleToggleIntrospection}>
            {showIntrospection ? "Hide Introspection" : "View Introspection"}
          </button>
        </div>
        {showCards && (
          <InfoCards />
        )}
        {showIntrospection && introspectionData && (
          <div className={styles.introspectionBox}>
            <pre>{introspectionData}</pre>
          </div>
        )}
      </div>

      {/* Admin API Section */}
      {activeIndex === 0 && (
        <div className={styles.description}>
          <div className={styles.navigation}>
            <h2 onClick={() => handleSectionChange('collections')} className={getHeaderClass('collections')}>Shopify Collections</h2>
            <h2 onClick={() => handleSectionChange('products')} className={getHeaderClass('products')}>Shopify Products</h2>
          </div>
          <div className={styles.content}>
            {activeSection === 'collections' && <Collections collections={collections} />}
            {activeSection === 'products' && <Products products={products} />}
          </div>
        </div>
      )}

      {/* Storefront API Section */}
      {activeIndex === 1 && (
        <div className={styles.description}>
          <div className={styles.navigation}>
            {/* You may want to rename these to something more relevant to the Storefront API */}
            <h2 onClick={() => handleSectionChange('storefrontCollections')} className={getHeaderClass('storefrontCollections')}>Shopify Storefront Collections</h2>
            <h2 onClick={() => handleSectionChange('storefrontProducts')} className={getHeaderClass('storefrontProducts')}>Shopify Storefront Products</h2>
          </div>
          <div className={styles.content}>
            {activeSection === 'storefrontCollections' && <StorefrontCollections collections={storefrontCollections} />}
            {activeSection === 'storefrontProducts' && <StorefrontProducts products={storefrontProducts} />}
          </div>
        </div>
      )}
    </main>
  );
}
