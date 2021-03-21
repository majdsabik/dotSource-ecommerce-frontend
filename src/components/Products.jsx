import React from 'react';
import { getAllProducts } from '../services/repository.js';
import Product from './Product';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    getAllProducts().then(products => {
      this.setState({ products });
    });
  }

  render() {
    const { products } = this.state;

    return (
      <div style={{ 'textAlign': 'center' }}>
        <h3>List of Available Products</h3>
        <hr />
        {products.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    );
  }
}
