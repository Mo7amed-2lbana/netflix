import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <>
      <div className="container vh-100">
        <div className="img position-absolute top-50 start-50 translate-middle">
          <img
            src={require("../../images/4o4.jpg")}
            alt=""
            className=" w-100 rounded-3"
          />
          <Link to={"/"}>
            <button
              style={{ bottom: "20px" }}
              className="btn btn-danger position-absolute start-50 translate-middle-x"
            >
              Go To Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
