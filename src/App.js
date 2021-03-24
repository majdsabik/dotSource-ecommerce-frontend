import React, { useState, useEffect } from 'react';
import Products from './components/Products.jsx';
import { getAllProducts } from './services/product.js';
import Cart from './components/Cart.jsx';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await getAllProducts();
      setProducts(result);
    }
    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <Route exact path='/' render={props => <Products products={products} />} />
      <Route exact path='/cart' component={Cart} />
    </BrowserRouter>
  );
}

export default App;
