import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation()
  const crrLocation = location.pathname
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="btn-hover">
              <Link to="/" className="nav-link px-2 text-secondary">
                Home
                <span
                  className={`${crrLocation === "/" ? "tabactive1" : "hide"}`}
                ></span>
              </Link>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button
              type="button"
              className="btn btn-outline-light me-2 btn-hover"
            >
              <Link to="/Log-In" className="log-in-btn">
                Login
                <span
                  className={`${crrLocation === "/Log-In" ? "tabactive2" : "hide"}`}
                ></span>
              </Link>
            </button>
            <button
              type="button"
              className="btn btn-warning btn-hover"
            >
              <Link to="/Sign-Up" className="text-black sign-up">
                Sign-Up
                <span
                  className={`${crrLocation === "/Sign-Up" ? "tabactive3" : "hide"}`}
                ></span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
