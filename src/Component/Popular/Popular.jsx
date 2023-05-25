import React from "react";
import useApi from "./../../Hooks/ApiHooks";
import LoadingScreen from "./../LoadingScreen/LoadingScreen";
import { Link } from "react-router-dom";

export default function Popular() {
  const { apiData } = useApi(
    `https://api.themoviedb.org/3/person/popular?api_key=2a5ea2a3ee756b16dbbf353821dd7157&language=en-US&page=500`
  );
  console.log(apiData);
  return (
    <>
      {apiData ? (
        <div className="container py-5 mt-5">
          <h2 className="text-white mt-3 mb-5   text-center">Popular Acting</h2>

          <div className="row gy-5 justify-content-center">
            {apiData.map((men, idx) => {
              return (
                <>
                  <div key={idx} className="col-md-2 position-relative">
                    <div className="item rounded-4">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${men.profile_path}`}
                        alt={men.title}
                        className="w-100 rounded-4"
                      />
                    </div>
                    <div className="overlay position-absolute start-0 end-0 top-0 bottom-0 d-flex flex-column justify-content-center align-items-center">
                      <h5 className=" text-white px-3 mt-3 text-center">
                        {men.name}
                      </h5>
                      <h6 className="text-light mb-3 text-center">
                        {men.known_for_department}
                      </h6>
                      <Link
                        className=" text-decoration-none"
                        to={`/popularDetails/${idx}`}
                      >
                        <button className="btn btn-danger">More Details</button>
                      </Link>
                    </div>
                  </div>
                  ;
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
