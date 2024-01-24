const getShopifyCollections = async () => {
  try {
    const response = await fetch('http://localhost:3001/shopify/collections');
    if (!response.ok) {
      throw new Error('Network response for collections was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error;
  }
};

const getShopifyProducts = async () => {
  try {
    const response = await fetch('http://localhost:3001/shopify/products');
    if (!response.ok) {
      throw new Error('Network response for products was not ok')
    }
    return await response.json();
  } catch {
    console.error('There has been as problem with your fetch operation:', error);
    throw error;
  }
}

export { getShopifyCollections, getShopifyProducts };
