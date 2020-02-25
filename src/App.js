import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/global.scss';

import Home from './pages/Home.js';

function App() {
  return (
    <Router>
    {/* <Router basename={process.env.PUBLIC_URL}> */}
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;