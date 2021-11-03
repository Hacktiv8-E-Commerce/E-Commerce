import "./App.css";
import { useEffect } from "react";
import { Detail, Dashboard, Cart } from "./pages/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify([]));
  });
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
