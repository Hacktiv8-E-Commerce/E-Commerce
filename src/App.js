import "./App.css";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { Detail, Dashboard, Cart, LoginPage, AdminDashboard, Search, Category } from "./pages/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch()
  // let { path, url } = useRouteMatch();

  useEffect(() => {
    if (JSON.parse(!localStorage.getItem('cart'))) {
      localStorage.setItem('cart', JSON.stringify([]))
    }
    if (JSON.parse(!localStorage.getItem('recap'))) {
      localStorage.setItem('recap', JSON.stringify([]))
    }
    if (JSON.parse(localStorage.getItem('login'))) {
      dispatch({
        type: "SET_LOGIN",
        payload: JSON.parse(localStorage.getItem('login'))
      })
    }
  }, [])
  return (
    <Router>
      <ToastContainer theme="colored" position="bottom-right" autoClose={1500} pauseOnHover={false} />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/admin">
          <AdminDashboard />
        </Route>
        <Route path="/:productId">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
