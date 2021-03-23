import React from 'react';
import { Link } from 'react-router-dom';

import Product from './Product';

export default function Products({ products }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Available products</h3>
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
      <Link to='/cart'>
        <button style={{ marginRight: '10px' }}>View Cart</button>
      </Link>
    </div>
  );
}
