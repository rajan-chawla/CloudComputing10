import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/header.css";

/**
 * header component handles navigation, logout,
 * and emittes search event, assignes header context search
 * term and type.
 */
const Header = props => {

  const handleLogout = () => {
    window.sessionStorage.clear();
    window.localStorage.clear();
    window.location.reload(false);
    window.location.replace("/");
  };

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 col">
            <li className="nav-item heading">
              Welcome 
            </li>
            <li className="nav-item">
            </li>
          </ul>
          <div className="col px-0">
            <div className="heading">
              IMAGE TO TEXT AND PDF
                    </div>
          </div>
          <div className="col px-0">
            <ul className="navbar-nav float-lg-right">
              <li className="nav-item">

                {/* {
                  window.localStorage.getItem("userid") !== null ?
                    <Link
                      className="nav-link"
                      to="/user"
                    >Profile</Link>
                    :
                    ""
                } */}

              </li>

              <li
                className={
                  window.localStorage.getItem("userid") === null
                    ? "d-none"
                    : "nav-item"
                }
              >
                <Link className="nav-link" to="#" onClick={handleLogout}>
                  <i
                    className="fa fa-sign-out fa-2x mr-2"
                    aria-hidden="true"
                  ></i>
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;