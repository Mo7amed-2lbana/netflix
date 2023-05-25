import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import NavBar from "./../NavBar/NavBar";
import Footer from "./../Footer/Footer";

export default function LayOut({ UserData, handleLogOut }) {
  return (
    <>
      <NavBar UserData={UserData} handleLogOut={handleLogOut} />
      <SideBar />
      <Outlet />
      <Footer />
    </>
  );
}
