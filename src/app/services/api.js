const getShopifyCollections = async () => {
  try {
    const response = await fetch('http://localhost:3001/admin/shopify/collections');
    if (!response.ok) {
      throw new Error('Network response for collections was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error;
  }
};

const getShopifyCollectionDetails = async (collectionId) => {
  try {
    const collectionUrl = `http://localhost:3001/admin/shopify/collections/${collectionId}`;
    const productsUrl = `http://localhost:3001/admin/shopify/collections/${collectionId}/products`;

    const [collectionResponse, productsResponse] = await Promise.all([
      fetch(collectionUrl),
      fetch(productsUrl)
    ]);

    if (!collectionResponse.ok) {
      throw new Error(`Failed to fetch collection details for ID: ${collectionId}`);
    }
    if (!productsResponse.ok) {
      throw new Error(`Failed to fetch products for collection ID: ${collectionId}`);
    }

    const collectionData = await collectionResponse.json();
    const productsData = await productsResponse.json();

    return {
      collection: collectionData,
      products: productsData.products
    };
  } catch (error) {
    console.error('Error in fetching collection details or products:', error);
    throw error;
  }
};


const getShopifyProducts = async () => {
  try {
    const response = await fetch('http://localhost:3001/admin/shopify/products');
    if (!response.ok) {
      throw new Error('Network response for products was not ok')
    }
    return await response.json();
  } catch (error) {
    console.error('There has been as problem with your fetch operation:', error);
    throw error;
  }
}

const getStorefrontProducts = async () => {
  try {
    const response = await fetch('http://localhost:3001/storefront/products');
    if (!response.ok) {
      throw new Error('Storefront API response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error with Storefront API request:', error);
    throw error;
  }
};

const getStorefrontCollections = async () => {
  const query = `
    {
      collections(first: 10) {
        edges {
          node {
            id
            title
            handle
          }
        }
      }
    }
  `;
  return await storefrontRequest(query);
};

export { getShopifyCollections, getShopifyProducts, getShopifyCollectionDetails, getStorefrontCollections, getStorefrontProducts };
