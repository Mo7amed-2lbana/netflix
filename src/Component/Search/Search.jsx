import React, { useContext } from "react";
import { ApiContext } from "./../../Context/ApiContext";
import { useFormik } from "formik";
import { Outlet } from "react-router-dom";

export default function Search() {
  const { getAllMovie } = useContext(ApiContext);
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (val) => {
      getAllMovie(val.name);
    },
  });

  return (
    <>
      <div className="container py-5 mt-5">
        <form
          action=""
          onSubmit={formik.handleSubmit}
          onBlur={formik.handleBlur}
        >
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="form-control mt-5 text-white py-2 bg-transparent border border-1 text-center"
            placeholder="Search for a movie / tv"
          />
          <input
            type="submit"
            value={"Search"}
            className="mt-3 text-center d-block mx-auto btn btn-danger"
          />
        </form>
      </div>
      <Outlet></Outlet>
    </>
  );
}
