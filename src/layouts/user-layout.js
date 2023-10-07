import React from "react";

import { Outlet } from "react-router-dom";
import Topbar from "../Components/common/topbar";
import Menubar from "../Components/common/menubar";
import Footer from "../Components/common/footer";
const UserLayout = () => {
  return (
    <>
      <Topbar />
      <Menubar />
      <Outlet />
      <Footer />
    </>
  );
};
export default UserLayout;

