import React from 'react'
import { Login } from '../components/index'
import { Redirect } from 'react-router-dom'

export default function LoginPage() {
    return (
        !JSON.parse(localStorage.getItem('login')) ? (
            <div className="vh-100 mx-auto">
                <Login />
            </div >
        )
            :
            <Redirect to={`/`} />
    )
}