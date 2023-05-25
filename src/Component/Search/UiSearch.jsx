import React, { useContext } from "react";
import { ApiContext } from "../../Context/ApiContext";
import { Link } from "react-router-dom";

export default function UiSearch() {
  const { searchData } = useContext(ApiContext);

  return (
    <>
      <div className="container">
        {searchData ? (
          <div className="row mt-5 gy-5">
            {searchData.map((pro, idx) => {
              return (
                <>
                  <div key={idx} className="col-md-2 position-relative">
                    <div className="item p-2">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${pro.poster_path}`}
                        alt=""
                        className="w-100 rounded-2"
                      />
                      <img
                        src={require("../../images/netflix_logo_icon_170919.ico")}
                        alt="w-100"
                        className=" ico position-absolute ms-2"
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
                </>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
