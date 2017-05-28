import React, { Component } from 'react';
import slugify from 'slugify';
import { Link } from 'react-router-dom';

import Particles from 'react-particles-js';
import particleConfig from '../../../particleConfig';

class Home extends Component {
  render() {
    var { products } = this.props;
    products = products || [];
    var styles = {
      container: {
        width: 690,
        background: 'rgba(255,255,255,0.4)',
        borderRadius: 10,
        margin: '20px auto',
        padding: 20,
        clear: 'both',
        fontFamily: '"distant_galaxyregular", sans-serif'
      },
      title: {
        margin: '0 0 20px 0'
      },
      list: {
        margin: 0,
        padding: 0,
        textAlign: 'center'
      },
      tile: {
        listStyle: 'none',
        margin: '0 10px 10px 0',
        width: 300,
        display: 'inline-block',
        textAlign: 'left'
      }
    };
    var tiles = products.map((product)=>{
      var { name } = product;
      var slug = slugify(name.toLowerCase());
      return (<li style={styles.tile} key={slug}>
          <Link to={`/detail/${slug}`}>
            <img style={{width: '100%'}} alt={`${name}`} src={`http://placehold.it/350x150?text=${encodeURIComponent(name)}`} />
            {name}
          </Link>
        </li>);
    });
    return (
      <div style={styles.container}>
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
        <h1 style={styles.title}>{`Watto's Space Emporium`}</h1>
        {products.length>0
          ? <ul style={styles.list}>{tiles}</ul>
          : <p>No items available</p>
        }
      </div>
    );
  }
}

export default Home;
