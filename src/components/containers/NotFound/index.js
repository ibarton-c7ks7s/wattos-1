import React, {Component} from 'react';

export default class NotFound extends Component {
  render() {
    return (<h1>Not Found</h1>);
  }

  shouldComponentUpdate() {
    return true;
  }
}