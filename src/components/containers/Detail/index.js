import React, {Component} from 'react';

export default class Detail extends Component {
  render() {
    return (<h1>Ship Details</h1>);
  }

  shouldComponentUpdate() {
    return true;
  }
}