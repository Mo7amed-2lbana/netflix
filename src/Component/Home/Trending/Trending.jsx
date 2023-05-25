import React from "react";
import useApi from "../../../Hooks/ApiHooks";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./trending.css";
import { Link } from "react-router-dom";
import LoadingScreen from "./../../LoadingScreen/LoadingScreen";

export default function Trending() {
  const { apiData } = useApi(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=2a5ea2a3ee756b16dbbf353821dd7157`
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {apiData ? (
        <div id="trending" className=" container pt-5">
          <div className="pt-5">
            <h4
              className="text-white mb-2 mt-5
           ms-5 ms-md-0 px-5 px-md-0"
            >
              Trending Now :{" "}
            </h4>
            <Slider {...settings}>
              {apiData.map((pro, idx) => {
                return (
                  <>
                    <div className=" position-relative " key={idx}>
                      <div className="item p-2">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${pro.poster_path}`}
                          alt=""
                          className="w-100 rounded-2"
                        />
                        <img
                          src={require("../../../images/netflix_logo_icon_170919.ico")}
                          alt="w-100"
                          className=" ico position-absolute"
                        />
                      </div>
                      <div className="overlay position-absolute start-0 end-0 top-0 bottom-0 d-flex flex-column justify-content-center align-items-center">
                        <h5 className=" text-white  mt-3 text-center">
                          {pro.title.split(" ").slice(0, 3).join(" ")}
                        </h5>
                        <h6 className="text-light mt-1 text-center">
                          {pro.release_date}
                        </h6>
                        <Link to={`/movieDetails/${pro.id}`}>
                          <button className="btn btn-danger">Watch Now</button>
                        </Link>
                      </div>
                    </div>
                    ;
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
