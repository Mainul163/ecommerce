import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  //   const style = {
  //     position: "absolute",
  //     z-index: -50;
  //   };
  //   const stls = {
  //     overflow: "hidden",
  //   };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light navcontainer">
        <div class="container-fluid">
          <a class="navbar-brand text-warning" href="#">
            ECOMMERCE
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <Link
                to="/"
                class="nav-link active text-warning fw-bold me-5"
                aria-current="page"
              >
                Home
              </Link>
              <a class="nav-link text-warning fw-bold me-5" href="#">
                Features
              </a>
              <a class="nav-link text-warning fw-bold me-5" href="#">
                Pricing
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
