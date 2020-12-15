import React, { useEffect } from'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Checkout from './Checkout'
import Login from './Login'
import { auth } from "./firebase"
import { useStateValue } from './StateProvider';
import Payment from './Payment';

/*https://www.youtube.com/watch?v=RDV3Z1KCBvo at 5:35:13 */

function App() {
  const [ {}, dispatch ] = useStateValue()

  useEffect(() =>{
    //will only run when the app component mounts/loads
    auth.onAuthStateChanged(authUser =>{
      console.log("The user is----->", authUser)
      if(authUser)
      {
        //this means user just logged in or they were logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

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

          <Route path="/payment">
            <Header />
            <Payment />
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
