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
      return (<li key={slug}>
          <Link to={`/detail/${slug}`}>
            <img alt={`${name}`} src={`http://placehold.it/350x150?text=${encodeURIComponent(name)}`} />
            {name}
          </Link>
        </li>);
    });
    return (
      <div>
        <h1>{`Watto's Space Emporium`}</h1>
        <ul>{tiles}</ul>
      </div>
    );
  }
}

export default Home;
