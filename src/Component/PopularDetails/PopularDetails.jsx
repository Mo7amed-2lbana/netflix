import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import LoadingScreen from "./../LoadingScreen/LoadingScreen";
import useApi from "../../Hooks/ApiHooks";

export default function PopularDetails() {
  const { apiData } = useApi(
    `https://api.themoviedb.org/3/person/popular?api_key=2a5ea2a3ee756b16dbbf353821dd7157&language=en-US&page=500`
  );
  const { id } = useParams();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <>
      {apiData ? (
        <>
          <div className="moveDetails container position-relative  py-5 mt-5">
            <div className="about bg-dark d-flex w-25 ms-auto px-3 rounded-4">
              <h4 className=" text-white text-center text-md-end my-4">
                Name :{" "}
                <span className="fs-5 text-white"> {apiData[id].name}</span>
              </h4>
            </div>
            <Slider {...settings}>
              {apiData[id].known_for.map((ele, idx) => {
                console.log(apiData[id]);
                return (
                  <>
                    <div className="row" key={idx}>
                      <div className="col-md-4 mt-4">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${ele.backdrop_path}`}
                          className="w-100 h-100 rounded-4"
                          alt={apiData[id].original_title}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="item text-white ms-3">
                          <h4 className=" mt-5">{ele.title}</h4>
                          <h6 className="mt-2 fw-normal">
                            {" "}
                            {ele.release_date}{" "}
                          </h6>
                          <h5 className=" my-3 fw-bold">
                            Media :{" "}
                            <span className="fw-normal">{ele.media_type}</span>{" "}
                          </h5>
                          <h4 className="mt-5 text-danger fw-bold">Overview</h4>
                          <p>{ele.overview}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
