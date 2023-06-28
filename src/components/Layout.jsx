import { useState } from "react";
import { NavDrawer } from ".";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router";
import { Recommender } from ".";

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>

      <NavDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <div className="main-content">
        <Navbar setDrawerOpen={setDrawerOpen} />
        <Outlet />
    {(location.pathname === "/")?     <Recommender/> : null }
      </div>
    </>
  );
};
export { Layout };
