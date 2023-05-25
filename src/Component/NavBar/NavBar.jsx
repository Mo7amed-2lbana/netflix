import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/netflix_official_logo_icon_168085.svg";
import "./navbar.css";

export default function NavBar({ UserData, handleLogOut }) {
  return (
    <>
      <nav className=" position-fixed w-100 top-0">
        <div className="container">
          <div className="row px-2 py-3 justify-content-between align-items-center">
            <div className="col-6">
              <Link className="navbar-brand" href="#">
                <img src={logo} alt="Netflix Logo" className="netflix-logo" />
              </Link>
            </div>
            <div className="col-6 text-end">
              <i class="fa-solid fa-bell fa-lg text-white me-3"></i>

              {UserData ? (
                <button
                  onClick={function () {
                    handleLogOut();
                  }}
                  className="btn btn-danger me-3"
                >
                  LogOut
                </button>
              ) : (
                <>
                  <Link to={"/signin"}>
                    <button className="btn btn-danger me-3 ">SignIn</button>
                  </Link>
                  <Link to={"/register"}>
                    <button className="btn btn-danger me-3 ">Register</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
