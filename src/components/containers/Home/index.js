import React, { Component } from 'react';
import slugify from 'slugify';
import { Link } from 'react-router-dom';

import Particles from 'react-particles-js';
import particleConfig from '../../../particleConfig';

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
        <Particles style={{
          background: 'rgb(35, 39, 65)',
          width: '100%',
          height: '100%',
          position: 'fixed',
          zIndex: '-1',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        }} params={particleConfig} />
        <h1>{`Watto's Space Emporium`}</h1>
        <ul>{tiles}</ul>
      </div>
    );
  }
}

export default Home;
