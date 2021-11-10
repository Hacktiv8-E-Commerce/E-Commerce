import "./App.css";
import { Stack } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { AdminRecap, Detail, Dashboard, Cart, LoginPage, AdminDashboard, Search, Category, LoginAdminPage } from "./pages/index";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function NoMatch() {
  let location = useLocation();

  return (
    <div className="vh-100 d-flex">
      <Stack className="m-auto align-items-center">
        <img src="assets/error.png" alt="" width="100" />
        <h3>no pages found <code>{location.pathname}</code></h3>
      </Stack>
    </div>
  );
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (JSON.parse(!localStorage.getItem("cart"))) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    if (JSON.parse(!localStorage.getItem("recap"))) {
      localStorage.setItem("recap", JSON.stringify([]));
    }
    if (JSON.parse(localStorage.getItem("login"))) {
      dispatch({
        type: "SET_LOGIN",
        payload: JSON.parse(localStorage.getItem("login")),
      });
    }
  }, []);
  return (
    <Router>
      <ToastContainer
        theme="colored"
        position="bottom-right"
        autoClose={1500}
        pauseOnHover={false}
      />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/loginadmin">
          <LoginAdminPage />
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
        <Route path="/admin-rekap">
          <AdminRecap />
        </Route>
        <Route path="/product/:productId">
          <Detail />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
