import React, { Component } from 'react';
import slugify from 'slugify';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    var { products } = this.props;
    if (!products) {
      return (<p>No products</p>);
    }
    var tiles = products.map((product)=>{
      var { name } = product;
      var slug = slugify(name.toLowerCase());
      return (<li key={slug}><Link to={`/detail/${slug}`}>{name}</Link></li>);
    });
    return (
      <div>
        <p>{`Welcome to Watto's!`}</p>
        <ul>{tiles}</ul>
      </div>
    );
  }
}

export default Home;
