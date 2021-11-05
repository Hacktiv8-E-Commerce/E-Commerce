import React from 'react'
import Login from '../pages/login'

export default function ModalLogin() {

    return (
        <div class="modal fade" id="staticBackdrop" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style={{ borderRadius: "1rem" }}>
                    <Login />
                </div>
            </div>
        </div>
    )
}