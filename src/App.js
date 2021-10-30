import "./App.css";
import Dashboard from './pages/dashboard'
import Detail from './pages/detail'
import Cart from './pages/cart'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
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
    </Router >
  );
}

export default App;
