import React from 'react'
import Card from "./Card";
import styles from '../styles/card.module.css';

function InfoCards() {
  return (
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
  )
}

export default InfoCards;
