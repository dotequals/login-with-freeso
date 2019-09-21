import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DevTool from './DevTool';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <div className="crater" />
      <div className="main">
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dev" component={DevTool} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;