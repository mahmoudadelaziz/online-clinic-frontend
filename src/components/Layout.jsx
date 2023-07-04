import { useState } from "react";
import { NavDrawer } from ".";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router";
import { Recommender } from ".";
import { useAuth } from "../AuthContext";
import { Typography } from "@mui/material";

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const tes = () => {
    console.log('22 => ', location.pathname === "/")
  }

  const { userType } = useAuth();
  console.log('er')
  console.log(location.pathname === "/")
  return (
    <div>
      <NavDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <div className="main-content">
        <Navbar setDrawerOpen={setDrawerOpen} />
        <Outlet />
        {location.pathname === "/" && userType != "Doctor" ? (
          <Recommender />
        ) : null}
        {(userType === "Doctor" && location.pathname === "/") && (
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            {" "}
            Welcome back, doctor!
          </Typography>
        )}
      </div>
    </div>
  );
};
export { Layout };
