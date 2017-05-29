import React, { Component } from 'react';

import Particles from 'react-particles-js';
import particleConfig from '../../../particleConfig';

import ShipTile from '../../ShipTile';

class Home extends Component {
  render() {
    var { products } = this.props;
    products = products || [];
    var styles = {
      container: {
        width: 900,
        margin: '20px auto',
        clear: 'both',
        fontFamily: '"distant_galaxyregular", sans-serif',
        color: 'white'
      },
      title: {
        margin: '20px',
        fontSize: 40
      },
      list: {
        margin: 0,
        padding: 0,
        lineHeight: '150px'
      },
      tile: {
        listStyle: 'none',
        margin: '0 40px',
        width: 300,
        display: 'inline-block',
        textAlign: 'left',
        lineHeight: '20px',
        textDecoration: 'none',
        fontSize: 20
      },
      name: {
        textDecoration: 'none',
        color: 'white'
      },
      image: {
        maxWidth: '100%',
        maxHeight: '300px'
      }
    };
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
          ? <ul style={styles.list}>
              {products.map((product)=><ShipTile key={product.name} product={product} />)}
            </ul>
          : <p>No items available</p>
        }
      </div>
    );
  }
}

export default Home;
