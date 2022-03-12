import React from 'react';
import {
  Redirect, Route, Switch, BrowserRouter,
} from 'react-router-dom';
import Home from './pages/home/Home';
import './assets/css/core.css';
import 'antd/dist/antd.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" render={() => <Redirect to={Home} />} />
    </Switch>
  </BrowserRouter>
);

export default App;
