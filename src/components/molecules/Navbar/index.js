import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light px-4">
      <div className="container-fluid px-0">
        <a className="fs-2 navbar-brand me-5 fw-bold" to="#">
          LO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-uppercase ms-auto">
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link fw-bold" aria-current="page" to="#">
                about
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link fw-bold" to="#">
                articles
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link fw-bold" to="#">
                cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default index;
