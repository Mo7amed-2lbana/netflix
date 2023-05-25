import React, { useEffect, useState } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Movies() {
  const [apiData, setApiData] = useState(null);

  async function getApiData() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=2a5ea2a3ee756b16dbbf353821dd7157&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=100"
    );
    setApiData(data.results);
  }

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      {apiData ? (
        <div className="container mt-5 pt-5">
          <h2 className="text-white mt-3 mb-5   text-center">Watch Movies</h2>
          <div className="row gy-4">
            {apiData.map((pro, idx) => {
              return (
                <>
                  <div key={idx} className="col-md-2 position-relative ">
                    <div className="item">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${pro.poster_path}`}
                        alt=""
                        className="w-100 rounded-2"
                      />
                      <img
                        src={require("../../images/netflix_logo_icon_170919.ico")}
                        alt="w-100"
                        className=" ico position-absolute"
                      />
                    </div>
                    <div className="overlay position-absolute start-0 end-0 top-0 bottom-0 d-flex flex-column justify-content-center align-items-center">
                      <h5 className=" text-white px-3  mt-3 text-center">
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
