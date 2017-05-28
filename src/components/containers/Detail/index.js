import React, {Component} from 'react';

function renderSpec(name, spec) {
  return (<div>
    <dt>{name}</dt>
    <dd>{spec || 'N/A'}</dd>
    </div>);
}

export default class Detail extends Component {
  render() {
    if (!this.props.product) return (<p>No data</p>);
    var { name, manufacturer, price, class: shipClass, techspecs: specs } = this.props.product;
    return (
      <div>
        <h1>{name}</h1>
        <img alt={`${name}`} src={`http://placehold.it/350x150?text=${encodeURIComponent(name)}`} />
        <p>The {name} is a {shipClass} class ship from {manufacturer}. </p>
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
        <button onClick={()=>alert(`Please talk to Watto if you want to buy this ship.`)}>Buy{price?` (${price})`:''}</button>
      </div>);
  }

  shouldComponentUpdate() {
    return true;
  }
}