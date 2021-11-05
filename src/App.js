import "./App.css";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { Detail, Dashboard, Cart } from "./pages/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (JSON.parse(!localStorage.getItem('cart'))) {
      localStorage.setItem('cart', JSON.stringify([]))
    }
    dispatch({
      type: "SET_LOGIN",
      payload: JSON.parse(localStorage.getItem('login'))
    })
  }, [])
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/:productId">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
