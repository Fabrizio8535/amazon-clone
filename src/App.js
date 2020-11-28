import React from'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Checkout from './Checkout'
import Login from './Login'

/*https://www.youtube.com/watch?v=RDV3Z1KCBvo at 3:44:59 */

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/login">
            <Login />
        </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
