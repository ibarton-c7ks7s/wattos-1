import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/containers/Home';
import Detail from './components/containers/Detail';
import NotFound from './components/containers/NotFound';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

ReactDOM.render(<Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/detail/example">Example Ship</Link></li>
      </ul>

      <hr/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/detail/:name" component={Detail}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
