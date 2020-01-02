import React, { Component } from "react";

class Product extends Component {
  render() {
    return <h1>Product id: {this.props.match.params.id}</h1>;
  }
}

export default Product;
