"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getShopifyCollections, getShopifyProducts } from "./services/api";
import Collections from "@/app/components/Collections";
import Products from '@/app/components/Products';
import Card from "./components/Card";

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
        <ul className={styles.cards}>
          <Card title="Collections">
            <li>categorization</li>
            <li>custom colelctions</li>
            <li>smart collections</li>
            <li>storefront organization</li>
            <li>promotional campaigns</li>
          </Card>
          <Card title="Products">
            <li>inventory management</li>
            <li>variants and options</li>
            <li>stock management</li>
            <li>product organization</li>
            <li>SEO optimization</li>
          </Card>
          <Card title="Orders">
            <li>order processing</li>
            <li>customer communication</li>
            <li>order adjustments</li>
            <li>payment management</li>
            <li>analytics and reporting</li>
          </Card>
          <Card title="Customers">
            <li>customer profiles</li>
            <li>segmentation</li>
            <li>personalization</li>
            <li>customer service</li>
            <li>loyalty programs</li>
          </Card>
          <Card title="Inventory">
            <li>inventory tracking</li>
            <li>stock adjustments</li>
            <li>low stock alerts</li>
            <li>inventory forecasting</li>
          </Card>
          <Card title="Discounts">
            <li>discount code creation</li>
            <li>discount rules</li>
            <li>time-limited offers</li>
            <li>performance tracking</li>
          </Card>
          <Card title="Shipping and Fulfillment">
            <li>shipping rate & methods</li>
            <li>order fulfillment</li>
            <li>carrier integration</li>
            <li>return management</li>
          </Card>
          <Card title="Analytics and Reports">
            <li>sales reports</li>
            <li>customer insights</li>
            <li>product performance</li>
            <li>traffic analysis</li>
          </Card>
          <Card title="Webhooks" />
          <Card title="Metafields" />
          <Card title="Pages and Blogs" />
          <Card title="Themes and Assets" />
          <Card title="Script Tags and App Embeds" />
          <Card title="User and Permissions" />
        </ul>
      </div>
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
