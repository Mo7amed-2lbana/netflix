import React, { useContext, useEffect } from "react";
import { ApiContext } from "../../Context/ApiContext";
import { useParams } from "react-router-dom";
import "./moveDetails.css";
import LoadingScreen from "./../LoadingScreen/LoadingScreen";

export default function MovieDetails() {
  const { moveData, getMovieData } = useContext(ApiContext);
  console.log(moveData);
  const { id } = useParams();
  useEffect(() => {
    getMovieData(id);
  }, []);
  return (
    <>
      {moveData ? (
        <>
          <div
            className="moveDetails container position-relative  py-5 mt-5"
          >
            <div className="row">
              <div className="col-md-3">
                  <div className="">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${moveData.poster_path}`}
                      alt={moveData.title}
                      className="w-100 h-100 rounded-4"
                    />
                  </div>
              </div>
              <div className="col-md-9 ">
                <div className="item text-white ms-3">
                  <h2 className=" mt-4">{moveData.title}</h2>
                  <div className="title d-flex">
                    <p className="">
                      {moveData.release_date} <span className="mx-3">|</span>
                    </p>
                    <ul className=" list-unstyled d-flex">
                      {moveData.genres.map((list) => {
                        return <li className="me-2">{list.name},</li>;
                      })}
                    </ul>
                  </div>
                  <a
                    className=" text-decoration-none text-white"
                    href={moveData.homepage}
                  >
                    <p className="mt-3 play">
                      <i className="fa fa-play fa-lg me-1 "></i> Play Trailer
                    </p>
                  </a>
                  <p className="mt-3 text-white-50 ">{moveData.tagline}</p>
                  <h5 className="mt-5">Overview</h5>
                  <p>{moveData.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
