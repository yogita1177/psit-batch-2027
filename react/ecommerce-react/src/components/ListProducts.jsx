import ProductCard from './ProductCard';
import products from '../data/products';
import { useState } from 'react';

function ListProducts() {
  //   let productList = products;
  const [productList, setProductList] = useState(products);

  function filterProducts() {
    setProductList(products.filter((product) => product.price > 200000));
  }
  return (
    <section className='products'>
      <h1>Trending Products</h1>
      <button onClick={filterProducts} className='filter-btn'>
        Filter Products Above 2000
      </button>
      <div className='products-grid'>
        {productList.map((product) => (
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
