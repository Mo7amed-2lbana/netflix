import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function SideBar() {
  useLayoutEffect(() => {
    document.querySelectorAll(".sideBar .icon .item").forEach((el) => {
      el.addEventListener("click", () => {
        document.querySelectorAll(".sideBar .icon .item").forEach((el) => {
          el.classList.remove("active");
        });
        el.classList.add("active");
      });
    });
  }, []);

  return (
    <>
      <div className="sideBar shadow-lg  position-fixed start-0 bottom-0 top-0 d-flex justify-content-center align-items-center">
        <div className="icons flex-wrap">
          <div className="icon mb-5">
            <Link to={"/search"}>
              <div className="item">
                <i className="fa fa-search text-white pb-1 fa-lg "></i>
              </div>
            </Link>
          </div>
          <div className="icon mb-5">
            <Link to={"/"}>
              <div className="item active">
                <i className="fa fa-home text-white pb-1 fa-lg "></i>
              </div>
            </Link>
          </div>
          <div className="icon mb-5">
            <Link to={"/popular"}>
              <div className="item">
                <i class="fa-solid fa-users text-white pb-1 fa-lg "></i>
              </div>
            </Link>
          </div>
          <div className="icon mb-5">
            <Link to={"/tv"}>
              <div className="item">
                <i class="fa-solid fa-desktop text-white pb-1 fa-lg "></i>
              </div>
            </Link>
          </div>
          <div className="icon">
            <Link to={"/movie"}>
              <div className="item">
                <i class="fa-solid fa-clapperboard text-white pb-1 fa-lg "></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
