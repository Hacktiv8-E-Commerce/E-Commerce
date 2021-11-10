import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch, useHistory } from "react-router-dom";
import { logincheck } from "../store/login";

export default function Login() {
  let { path } = useRouteMatch();
  let history = useHistory();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const login = (status) => {
    dispatch(
      logincheck(
        state.infouser[0],
        state.infouser[1],
        redirect,
        status,
        loaderfalse
      )
    )
  };

  const redirect = (status) => {
    if (status) {
      history.push("/");
    }
  };

  const loaderfalse = () => {
    dispatch({
      type: "SET_LOAD",
      payload: false,
    });
  };

  return (
    <div className="card bg-dark text-white h-100 rounded-0">
      <div className="card-body p-5 text-start">
        <div className="mb-md-3 mt-md-3 pb-3">
          <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
          <p className="text-white-50 mb-5">
            Please enter your login and password!
          </p>
          <div className="form-outline form-white mb-4">
            <label className="form-label" htmlFor="typeEmailX">
              Email
            </label>
            <input
              onChange={(e) =>
                dispatch({
                  type: "SET_USER",
                  payload: [e.target.value, state.infouser[1]],
                })
              }
              type="email"
              id="typeEmailX"
              className="form-control form-control-lg"
              value={state.infouser[0]}
            />
          </div>

          <div className="form-outline form-white mb-4">
            <label className="form-label" htmlFor="typePasswordX">
              Password
            </label>
            <input
              onChange={(e) =>
                dispatch({
                  type: "SET_USER",
                  payload: [state.infouser[0], e.target.value],
                })
              }
              type="password"
              id="typePasswordX"
              className="form-control form-control-lg"
              value={state.infouser[1]}
            />
          </div>

          <p className="small mb-5 pb-lg-2">
            <a className="text-white-50" href="#!">
              Forgot password?
            </a>
          </p>

          {path === "/login" ? (
            <button
              className="btn btn-outline-light btn-lg px-5"
              type="submit"
              onClick={() => login(true)}
            >
              Login
            </button>
          ) : (
            <button
              className="btn btn-outline-light btn-lg px-5"
              type="submit"
              data-bs-dismiss="modal"
              onClick={() => login(false)}
            >
              Login
            </button>
          )}

          <div className="d-flex justify-content-center text-center mt-0 pt-0">
            <a href="#!" className="text-white">
              <i className="fab fa-facebook-f fa-lg"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-google fa-lg"></i>
            </a>
          </div>
        </div>

        <div>
          <p className="mb-0">
            Don't have an account?{" "}
            <a href="#!" className="text-white-50 fw-bold">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
