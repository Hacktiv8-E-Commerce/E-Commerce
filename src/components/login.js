import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch, useHistory } from "react-router-dom";
import { logincheck } from '../store/login'
import { toast } from 'react-toastify';

export default function Login() {
    let { path } = useRouteMatch();
    let history = useHistory()

    const state = useSelector((state) => state);
    const dispatch = useDispatch()

    const login = (status) => {
        if (state.infouser[0] === 'admin') {
            if (state.infouser[1] === 'admin') {
                history.push("/admin")
            } else {
                toast.error("username or password is incorrect");
            }
        } else {
            dispatch(logincheck(state.infouser[0], state.infouser[1], redirect, status, loaderfalse))
        }
    }

    const redirect = (status) => {
        if (status) {
            history.push("/")
        }
    }

    const loaderfalse = () => {
        dispatch({
            type: "SET_LOAD",
            payload: false
        })
    }

    return (
        <div class="card bg-dark text-white h-100 rounded-0">
            <div class="card-body p-5 text-start">
                <div class="mb-md-3 mt-md-3 pb-3">
                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="text-white-50 mb-5">Please enter your login and password!</p>
                    <div class="form-outline form-white mb-4">
                        <label class="form-label" for="typeEmailX">Email</label>
                        <input onChange={(e) => dispatch({ type: "SET_USER", payload: [e.target.value, state.infouser[1]] })} type="email" id="typeEmailX" class="form-control form-control-lg" />
                    </div>

                    <div class="form-outline form-white mb-4">
                        <label class="form-label" for="typePasswordX">Password</label>
                        <input onChange={(e) => dispatch({ type: "SET_USER", payload: [state.infouser[0], e.target.value] })} type="password" id="typePasswordX" class="form-control form-control-lg" />
                    </div>

                    <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                    {
                        path === '/login'
                            ? <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={() => login(true)}>Login</button>
                            : <button class="btn btn-outline-light btn-lg px-5" type="submit" data-bs-dismiss="modal" onClick={() => login(false)}>Login</button>
                    }

                    <div class="d-flex justify-content-center text-center mt-0 pt-0">
                        <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                        <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                        <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                    </div>

                </div>

                <div>
                    <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>
                </div>
            </div>
        </div >
    )
}