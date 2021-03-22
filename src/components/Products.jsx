import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../services/product.js';
import Product from './Product';

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await getAllProducts();
      setProducts(result);
    }
    fetchData();
  }, []);
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>List of Available Products</h3>
      <hr />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        {products.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
