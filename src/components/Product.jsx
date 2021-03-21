import React from 'react';

export default class Product extends React.Component {
  state = {
    quantity: 1,
  };

  addToCart() {
    console.log(this.props.product);
  }

  render() {
    const { product } = this.props;

    return (
      <div>
        <h4>
          Title: <small>{product.name}</small>
        </h4>
        <h5>
          Price: <small>${product.price}</small>
        </h5>
        <h5>
          Description: <small>{product.description}</small>
        </h5>
        <button onClick={() => this.addToCart()}>Add to cart</button>
        <hr />
      </div>
    );
  }
}
