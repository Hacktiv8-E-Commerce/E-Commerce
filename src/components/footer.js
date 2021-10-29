import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div class="d-flex bd-highlight">
      <div class="p-4 w-100 bd-highlight">
        Created by: Fadila Kharisma Yoga & Difen Yedidya Sjamsu
      </div>
      <div class="p-4 flex-shrink-  1 bd-highlight">
        <FontAwesomeIcon icon={faAmazon} />
      </div>
    </div>
  );
};

export default Footer;
