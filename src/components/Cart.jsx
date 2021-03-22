import React, { useState, useEffect } from 'react';
import { getCart, updateCart } from '../services/cart.js';
import Product from './Product';
import CartProduct from './CartProduct';

export default function Cart() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await getCart();
      console.log(result.products);
      setProducts(result.products);
    }
    fetchData();
  }, []);
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Products in cart</h3>
      <hr />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        {products.map(cartProduct => (
          <CartProduct cartProduct={cartProduct} key={cartProduct.productId} />
        ))}
      </div>
    </div>
  );
}
