import React, {Component} from 'react';
import slugify from 'slugify';

import Particles from 'react-particles-js';
import particleConfig from '../../../particleConfig';

function renderSpec(name, spec) {
  var styles = {
    dd: {
      fontFamily: 'Arial, sans-serif',
      fontSize: 16,
      margin: '0 0 10px 0',
      padding: 0
    }
  };
  return (<div>
    <dt>{name}</dt>
    <dd style={styles.dd}>{spec || 'N/A'}</dd>
    </div>);
}

export default class Detail extends Component {
  render() {
    if (!this.props.product) return (<p>No data</p>);
    var { name, manufacturer, price, class: shipClass, techspecs: specs } = this.props.product;
    var slug = slugify(name.toLowerCase());
    var styles = {
      container: {
        width: 900,
        margin: '20px auto',
        clear: 'both',
        fontFamily: '"distant_galaxyregular", sans-serif',
        color: 'white',
        fontSize: 20
      },
      title: {
        margin: '20px',
        fontSize: 40
      },
      image: {
        maxWidth: '100%',
        maxHeight: '500px'
      },
      leftCol: {
        width: '50%',
        float: 'left',
        lineHeight: '25px',
        fontFamily: 'Arial, sans-serif'
      },
      rightCol: {
        width: '45%',
        float: 'right',
        padding: '0 0 20px 20px',
        background: 'rgba(255,255,255,0.2)'
      },
      button: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        cursor: 'pointer',
        borderRadius: 5,
        border: 0,
        background: 'white'
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
        <h1 style={styles.title}>{name}</h1>
        <div style={styles.leftCol}>
          <img style={styles.image} alt={`${name}`} src={`/ships/${slug}.png`} />
          <p>The {name} is a {shipClass} class ship from {manufacturer}. </p>
        </div>
        <div style={styles.rightCol}>
          <h2>Tech Specs</h2>
          <dl>
            {renderSpec('MGLT', specs.MGLT)}
            {renderSpec('Armament', specs.armament)}
            {renderSpec('Communications', specs.communications)}
            {renderSpec('Hull', specs.hull)}
            {renderSpec('Length', specs.length)}
            {renderSpec('Max. Acceleration', specs.maxaccel)}
            {renderSpec('Max. Atmospheric Speed', specs.maxatmosphericspeed)}
            {renderSpec('Sensor', specs.sensor)}
            {renderSpec('Shielding', specs.shielding)}
            {renderSpec('Targeting', specs.targeting)}
          </dl>
          <button style={styles.button} onClick={()=>alert(`Please talk to Watto if you want to buy this ship.`)}>Buy{price?` (${price})`:''}</button>
        </div>
      </div>);
  }

  shouldComponentUpdate() {
    return true;
  }
}