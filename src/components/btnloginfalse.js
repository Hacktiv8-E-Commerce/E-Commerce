import React from 'react'
import ModalLogin from './modallogin'
import { Button } from 'react-bootstrap'

export default function Btnloginfalse({ text }) {
    return (
        <>
            <Button data-bs-toggle="modal" data-bs-target='#staticBackdrop' style={{ background: '#4F46E5' }}>{text}</Button>
            <ModalLogin />
        </>
    )
}