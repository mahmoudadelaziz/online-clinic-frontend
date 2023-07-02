import { useState } from "react";
import { NavDrawer } from ".";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router";
import { Recommender } from ".";
import { useAuth } from "../AuthContext";
import { Typography } from "@mui/material";

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { userType } = useAuth();
  return (
    <>
      <NavDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <div className="main-content">
        <Navbar setDrawerOpen={setDrawerOpen} />
        <Outlet />
        {location.pathname === "/" && userType != "Doctor" ? (
          <Recommender />
        ) : null}
        {userType === "Doctor" && (
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            {" "}
            Welcome back, doctor!
          </Typography>
        )}
      </div>
    </>
  );
};
export { Layout };
