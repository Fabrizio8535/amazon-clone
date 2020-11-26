import React from'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Checkout from './Checkout'

/*https://www.youtube.com/watch?v=RDV3Z1KCBvo&t=1013s at 2:26:00 */

function App() {
  return (
    <Router>
      <div className="app">
        {/* As Header goes in all section of page, it can be outside
        of the Switch Tag. This prevents a verbose code */}
        <Header />

        <Switch>
          <Route path="/checkout">
              <Checkout />
          </Route>

          <Route path="/">
              <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
