import React from 'react'
import { useDispatch } from 'react-redux'

export default function Login() {
    const dispatch = useDispatch()

    const login = () => {
        localStorage.setItem('login', JSON.stringify(true));
        dispatch({
            type: "SET_LOGIN",
            payload: true
        })
    }

    return (
        <div class="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
            <div class="card-body p-5 text-start">

                <div class="mb-md-3 mt-md-3 pb-3">

                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="text-white-50 mb-5">Please enter your login and password!</p>

                    <div class="form-outline form-white mb-4">
                        <label class="form-label" for="typeEmailX">Email</label>
                        <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                    </div>

                    <div class="form-outline form-white mb-4">
                        <label class="form-label" for="typePasswordX">Password</label>
                        <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                    </div>

                    <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                    <button class="btn btn-outline-light btn-lg px-5" type="submit" data-bs-dismiss="modal" onClick={() => login()}>Login</button>

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