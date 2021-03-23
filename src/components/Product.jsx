import React, { useState, useEffect } from 'react';
import { getCart, updateCart } from '../services/cart.js';

export default function Product({ product }) {
  const [quantity, setQuantity] = useState(1);

  async function addToCart() {
    const cart = await getCart();

    const products = cart.products
    console.log(cart)

    products.findIndex(el => el.productId._id === product.id) > -1
      ? (products[products.findIndex(el => el.productId._id === product.id)].qtd += +quantity)
      : products.push({ productId: product.id, qtd: +quantity });

    const newCart = {
      _id: cart.id,
      products: products,
      couponsId: cart.couponsId,
    };

    //await updateCart(newCart);
  }

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
      <h5>
        Price: <small>${product.price}</small>
      </h5>
      <h5>
        Description: <small>{product.description}</small>
      </h5>
      <input value={quantity} type='number' onChange={event => setQuantity(event.target.value)} />
      <button onClick={() => addToCart()}>Add to cart</button>
      <hr />
    </div>
  );
}
