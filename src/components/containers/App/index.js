import React, { Component } from 'react';
import axios from 'axios';
import find from 'lodash/find';
import slugify from 'slugify';

import Home from '../Home';
import Detail from '../Detail';
import NotFound from '../NotFound';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    axios.get('http://demo7475333.mockable.io/spaceships')
      .then(response => this.setState(response.data));
  }

  render() {
    var products = this.state.products;
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Home products={products} {...props}/>}/>
          <Route path="/detail/:name" render={(props) => {
            var { name } = props.match.params;
            var slug = slugify(name.toLowerCase());
            var product = find(products, function(product) {
              var productSlug = slugify(product.name.toLowerCase());
              return productSlug === slug;
            });
            return (<Detail product={product} {...props}/>);
          }}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
