import React, { useState, useEffect } from 'react';
import { getCart, updateCart } from '../services/cart.js';
import { validateCoupon } from '../services/coupon.js';
import CartProduct from './CartProduct';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  async function handleCoupon(event) {
    event.preventDefault();
    const coupon = document.getElementById('coupon').value;
    const validated = await validateCoupon(coupon);
    if (validated) {
      const cart = await getCart();

      const coupons = cart.couponsId;
      if (coupons.includes(validated.id)) {
        alert('Coupon is already added to this cart');
        return;
      }
      coupons.push(validated.id);

      const newCart = {
        _id: cart.id,
        products: products,
        couponsId: coupons,
      };

      await updateCart(newCart);
      alert('Coupon applied');
    } else {
      alert('Coupon is not valid');
    }
  }

  useEffect(() => {
    async function fetchData() {
      const cart = await getCart();
      setCart(cart);
      setProducts(cart.products);
    }
    fetchData();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      {!products.length ? (
        <h3>Cart is empty</h3>
      ) : (
        <div>
          <h3>Products in cart</h3>
          <hr />
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            {products.map((product, index) => (
              <CartProduct product={product.productId} qtd={product.qtd} key={index} />
            ))}
          </div>
          <form onSubmit={handleCoupon}>
            <label>
              Coupon: <input type='text' id='coupon' />
            </label>
            <input type='submit' value='Submit' />
          </form>
          <h4>
            Subtotal: <small>${cart.subTotal}</small>
          </h4>
          <h4>
            VAT: <small>${cart.vat}</small>
          </h4>
          <h4>
            Discount: <small>-${cart.discount}</small>
          </h4>
          <h4>
            Total: <small>${cart.total}</small>
          </h4>
        </div>
      )}
      <Link to='/'>
        <button style={{ marginRight: '10px' }}>View Products</button>
      </Link>
    </div>
  );
}
