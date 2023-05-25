import axios from "axios";
import { createContext, useState } from "react";

export const ApiContext = createContext();

export function ApiContextProvider({ children }) {
  // get MovieDetailsApi
  const [moveData, setMoveData] = useState(null);
  async function getMovieData(id) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=2a5ea2a3ee756b16dbbf353821dd7157&language=en-US`
    );
    setMoveData(data);
  }

  // get all movie to search
  const [searchData, setSearchData] = useState(null);
  async function getAllMovie(name) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=2a5ea2a3ee756b16dbbf353821dd7157&query=${name}`
    );
    setSearchData(data.results);
  }

  return (
    <>
      <ApiContext.Provider
        value={{
          moveData,
          getMovieData,
          searchData,
          getAllMovie,
        }}
      >
        {children}
      </ApiContext.Provider>
    </>
  );
}
