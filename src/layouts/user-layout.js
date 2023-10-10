import React, { useEffect } from "react";


import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/common/footer";
import Menubar from "../Components/common/menubar";
import Topbar from "../Components/common/topbar";
const UserLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.document.documentElement.scrollTo({ top: 0 });
  }, [pathname]);
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
