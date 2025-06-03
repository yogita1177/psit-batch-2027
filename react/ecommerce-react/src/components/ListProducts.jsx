import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';

function ListProducts() {
  //   let productList = products;
  const [productList, setProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const response = await fetch(
      'https://683ee8691cd60dca33dd8740.mockapi.io/api/v1/products'
    );
    const products = await response.json();
    setProductList(products);
    setFilteredProductList(products);
    return products;
  }

  function filterProducts() {
    setFilteredProductList(
      productList.filter((product) => product.price > 200000)
    );
  }

  function resetProduct() {
    setFilteredProductList(productList);
  }

  function searchProducts() {
    setFilteredProductList(
      productList.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }

  return (
    <section className='products'>
      <h1>Trending Products</h1>
      <input
        type='text'
        value={searchQuery}
        placeholder='Search for products...'
        onChange={(event) => setSearchQuery(event.target.value)}
        className='search-products'
      />
      <button onClick={searchProducts} className='search-product-btn'>
        Search
      </button>
      <button onClick={filterProducts} className='filter-btn'>
        Filter Products Above 2000
      </button>
      <button onClick={resetProduct} className='reset-btn'>
        Reset
      </button>
      <div className='products-grid'>
        {filteredProductList.map((product) => (
          <ProductCard
            key={product.id}
            productDetails={{
              name: product.name,
              price: product.price,
              image: product.image,
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default ListProducts;
