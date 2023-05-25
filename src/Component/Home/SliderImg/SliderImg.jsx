import React, { useEffect } from "react";
import "./slider.css";
export default function SimpleSlider() {
  useEffect(() => {
    document.querySelector("#toBotton").onclick = function () {
      window.scrollTo({
        top: 700,
        behavior: "smooth",
      });
    };
  }, []);

  return (
    <>
      <div className="slider position-relative">
        <div className="overLay position-absolute top-0 bottom-0 start-0 end-0"></div>
      </div>
      <div className="content w-100 position-absolute top-50 start-50 translate-middle">
        <div className="item">
          <h1 className="fw-bold  text-center text-white">
            Unlimited movies, TV shows, and more
          </h1>
          <h5 className="text-center text-white mt-3">Ready to watch? </h5>
        </div>
      </div>
      <div className="text-center mt-5 iconDown position-absolute start-50 translate-middle-x">
        <div id="toBotton">
          <i id="down" class="fa-solid fa-angles-down text-white"></i>
        </div>
      </div>
    </>
  );
}
