import React from 'react'
import { LoginAdmin } from '../components/index'
import { Redirect } from 'react-router-dom'

export default function LoginAdminPage() {
    return (
        !JSON.parse(localStorage.getItem('login-admin')) ? (
            <div className="vh-100 mx-auto">
                <LoginAdmin />
            </div >
        )
            :
            <Redirect to={`/admin`} />
    )
}