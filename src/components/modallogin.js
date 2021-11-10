import React from "react";
import { Login } from "./index";

export default function ModalLogin() {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content overflow-hidden rounded-3">
          <Login />
        </div>
      </div>
    </div>
  );
}
