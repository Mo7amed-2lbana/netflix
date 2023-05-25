import React, { useContext, useEffect, useState } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import LayOut from "./Component/LayOut/LayOut";
import Home from "./Component/Home/Home";
import MovieDetails from "./Component/MovieDetails/MovieDetails";
import { ApiContext, ApiContextProvider } from "./Context/ApiContext";
import Search from "./Component/Search/Search";
import UiSearch from "./Component/Search/UiSearch";
import Popular from "./Component/Popular/Popular";
import PopularDetails from "./Component/PopularDetails/PopularDetails";
import Tv from "./Component/Tv/Tv";
import Movies from "./Component/Movies/Movies";
import SignIn from "./Component/SignIn/SignIn";
import Register from "./Component/Register/Register";
import jwt_decode from "jwt-decode";
import Protected from "./Component/Protected/Protected";
import NotFound from "./Component/NotFound/NotFound";

export default function App() {
  const [UserData, setUserData] = useState(null);
  function saveUser() {
    const incodedToken = localStorage.getItem("token");
    const decodedToken = jwt_decode(incodedToken);
    setUserData(decodedToken);
  }

  function handleLogOut() {
    localStorage.removeItem("token");
    setUserData(null);
  }

  useEffect(() => {
    if (localStorage.getItem("token") != null && UserData == null) {
      saveUser();
    }
  }, []);

  const routers = createHashRouter([
    {
      path: "",
      element: <LayOut UserData={UserData} handleLogOut={handleLogOut} />,
      children: [
        {
          index: true,
          element: (
            <Protected UserData={UserData}>
              <Home />
            </Protected>
          ),
        },
        {
          path: "/search",
          element: (
            <Protected UserData={UserData}>
              <Search />
            </Protected>
          ),
          children: [{ index: true, element: <UiSearch /> }],
        },
        { path: "/movieDetails/:id", element: <MovieDetails /> },
        { path: "/popularDetails/:id", element: <PopularDetails /> },
        { path: "/signin", element: <SignIn saveUser={saveUser} /> },
        { path: "/register", element: <Register /> },
        {
          path: "/popular",
          element: (
            <Protected UserData={UserData}>
              <Popular />
            </Protected>
          ),
        },
        {
          path: "/tv",
          element: (
            <Protected UserData={UserData}>
              <Tv />
            </Protected>
          ),
        },
        {
          path: "/movie",
          element: (
            <Protected UserData={UserData}>
              {" "}
              <Movies />
            </Protected>
          ),
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <ApiContextProvider>
        <RouterProvider router={routers} />
      </ApiContextProvider>
    </>
  );
}
