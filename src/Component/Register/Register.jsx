import React, { useState } from "react";
import "./register.css";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [msError, setMsError] = useState("");
  const navigate = useNavigate();

  // validate forms
  function validate(val) {
    let errors = {};
    if (!val.name) {
      errors.name = "Name is required";
    } else if (val.name.length < 3) {
      errors.name = "Minlength is 3";
    }

    if (!val.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val.email)) {
      errors.email = "Invalid Email";
    }

    if (!val.password) {
      errors.password = "Password is required";
    } else if (!/^[A-Za-z0-9]{8}/i.test(val.password)) {
      errors.password =
        "Password must be min Length 8 and include Uppercase and Lowercase and Number";
    }


    if (!val.rePassword) {
      errors.rePassword = "RePassword is required";
    } else if (val.rePassword !== val.password) {
      errors.rePassword = "Password and rePassword not match";
    }

    if (!val.phone) {
      errors.phone = "Phone is required";
    } else if (!/^01[0125][0-9]{8}$/i.test(val.phone)) {
      errors.phone = "Phone is not valid";
    }

    return errors;
  }

  // handle formik
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validate,
    onSubmit: async (value) => {
      setIsLoading(true);
      let { data } = await axios
        .post("https://ecommerce.routemisr.com/api/v1/auth/signup", value)
        .catch((err) => {
          setMsError(err.response.data.message);
          setIsLoading(false);
        });

      if (data.message === "success") {
        console.log(data);
        setIsLoading(false);
        navigate("/signin");
      }
    },
  });

  // JSX Code
  return (
    <>
      <div className="signup py-5">
        <div className="container mt-5">
          <div
            style={{ zIndex: "99999999999999999999" }}
            className="frm position-relative"
          >
            <h1 className="text-white text-capitalize text-center">Register</h1>
            <form onSubmit={formik.handleSubmit}>
              {msError ? (
                <div className="alert alert-danger w-50 mx-auto text-center py-2 mt-3">
                  {msError}
                </div>
              ) : (
                ""
              )}
              <div className="form-group w-50 mx-auto mb-3">
                <label className="text-white mb-1" htmlFor="name">
                  Name :
                </label>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="form-control bg-transparent text-white"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
                {formik.errors.name && formik.touched.name ? (
                  <div className="alert alert-danger">{formik.errors.name}</div>
                ) : (
                  ""
                )}
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
                  <div className="alert alert-danger">
                    {formik.errors.email}
                  </div>
                ) : (
                  ""
                )}
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
                  <div className="alert alert-danger">
                    {formik.errors.password}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="form-group w-50 mx-auto mb-3">
                <label className="text-white mb-1" htmlFor="rePassword">
                  rePassword :
                </label>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.rePassword}
                  className="form-control bg-transparent text-white "
                  type="password"
                  name="rePassword"
                  id="rePassword"
                  placeholder="Your rePassword"
                />
                {formik.errors.rePassword && formik.touched.rePassword ? (
                  <div className="alert alert-danger">
                    {formik.errors.rePassword}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="form-group w-50 mx-auto mb-3">
                <label className="text-white mb-1" htmlFor="phone">
                  Phone :
                </label>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className="form-control bg-transparent text-white "
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone"
                />
                {formik.errors.phone && formik.touched.phone ? (
                  <div className="alert alert-danger">
                    {formik.errors.phone}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group text-start mt-3 mx-auto w-50">
                {isLoading ? (
                  <>
                    <button className="btn btn-success">
                      <img
                        src={require("../../images/spinner.png")}
                        alt=""
                        className="fa-spin w-75"
                      />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      disabled={!(formik.isValid && formik.dirty)}
                      type="submit"
                      className="btn btn-lg btn-success"
                    >
                      Register
                    </button>
                  </>
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
