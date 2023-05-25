import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, UserData }) {
  if (UserData === null && localStorage.getItem("token") === null) {
    return <Navigate to={"/signin"} />;
  } else {
    return children;
  }
}
