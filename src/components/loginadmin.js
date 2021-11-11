import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginAdmin() {
  let history = useHistory();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const login = () => {
    if (state.infouser[0] === "admin" && state.infouser[1] === "admin") {
      localStorage.setItem('login-admin', JSON.stringify(true));
      dispatch({
        type: "SET_LOGIN_ADMIN",
        payload: true
      })
      dispatch({
        type: "SET_USER",
        payload: ['', '']
      })
      history.push("/admin");
    } else {
      toast.error("username or password is incorrect");
    }
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
              Username
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
            />
          </div>
          <p className="small mb-5 pb-lg-2"></p>
          <button
            className="btn btn-outline-light btn-lg px-5"
            type="submit"
            onClick={() => login()}
            disabled={state.infouser[0].trim() === '' || state.infouser[1].trim() === '' ? true : false}
          >
            Login
          </button>
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
      </div>
    </div>
  );
}
