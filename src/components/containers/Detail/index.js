import React, {Component} from 'react';

export default class Detail extends Component {
  render() {
    if (!this.props.product) return (<p>No data</p>);
    var { name, manufacturer, class: shipClass } = this.props.product;
    return (
      <div>
        <h1>{name}</h1>
        <p>{manufacturer}</p>
        <p>{shipClass}</p>
      </div>);
  }

  shouldComponentUpdate() {
    return true;
  }
}