import React from 'react';

export default function CartProduct({ product, qtd }) {
  return (
    <div
      style={{
        padding: '10px',
        margin: '5px',
        border: '1px solid black',
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <h4>
        Title: <small>{product.name}</small>
      </h4>
      <h4>
        Description: <small>{product.description}</small>
      </h4>
      <h4>
        Price: <small>${product.price}</small>
      </h4>
      <h4>
        Quantity: <small>{qtd}</small>
      </h4>
    </div>
  );
}
