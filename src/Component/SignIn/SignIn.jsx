import React, { useState } from "react";
import "./signin.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

export default function SignIn({ saveUser }) {
  const [isLoading, setIsLoading] = useState(false);
  const [msError, setMsError] = useState("");

  // Navigate hooks
  const navigate = useNavigate();

  // vaildation by Yup....
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),

    password: Yup.string()
      .required("Password is required")
      .matches(
        /^[A-Za-z0-9]{8}/,
        "Password must be include UpperCase and LowerCase and Number"
      ),
  });

  // handle formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (value) => {
      setIsLoading(true);
      let { data } = await axios
        .post("https://ecommerce.routemisr.com/api/v1/auth/signin", value)
        .catch((err) => {
          setMsError(err.response.data.message);
          setIsLoading(false);
        });

      if (data.message === "success") {
        localStorage.setItem("token", data.token);
        $("#done").fadeIn(500, () => {
          setTimeout(() => {
            $("#done").fadeOut(1000);
          }, 500);
        });
        setIsLoading(false);
        setTimeout(() => {
          navigate("/");
        }, 1000);
        saveUser();
      }
    },
  });

  // JSX Code
  return (
    <>
      <div className="signin py-5">
        <div className="container mt-5">
          <div
            style={{ zIndex: "99999999999999999999" }}
            className="frm position-relative"
          >
            <h1 className="text-white text-capitalize text-center">SignIn</h1>

            <form onSubmit={formik.handleSubmit}>
              {msError ? (
                <div className="alert alert-danger w-50 mx-auto text-center py-2 mt-3">
                  {msError}
                </div>
              ) : (
                ""
              )}
              <div
                id="done"
                style={{ display: "none" }}
                className="text-center alert alert-success w-50 mx-auto mt-3 py-2"
              >
                Welcome Back
              </div>
              <div className="form-group w-50 mx-auto mb-3">
                <label className="text-white mb-1" htmlFor="email">
                  Email :
                </label>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="form-control bg-transparent text-white"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className="alert alert-danger my-2 py-2 text-center">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="form-group w-50 mx-auto mb-3">
                <label className="text-white mb-1" htmlFor="password">
                  Password :
                </label>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="form-control bg-transparent text-white "
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                />
                {formik.errors.password && formik.touched.password ? (
                  <div className="alert alert-danger my-2 py-2 text-center">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              <div className="form-group w-50 mx-auto mt-3">
                {isLoading ? (
                  <button type="button" className="btn btn-success">
                    <img
                      src={require("../../images/spinner.png")}
                      alt=""
                      className="w-50 fa-spin"
                    />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}
                    className="btn btn-success"
                  >
                    Login
                  </button>
                )}
              </div>
            </form>
          </div>
          <div className="overLay position-absolute start-0 end-0 top-0 bottom-0"></div>
        </div>
      </div>
    </>
  );
}
