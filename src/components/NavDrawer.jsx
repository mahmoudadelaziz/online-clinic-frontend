import { Drawer, List } from "@mui/material";
import { NavItem } from "./NavItem";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const NavDrawer = ({ drawerOpen, setDrawerOpen }) => {
  // Step 2: Use the context
  const { isAuth } = useContext(AuthContext); // destructure isAuth from the context object
  const NavItems = isAuth
    ? ([
        { title: "Home", icon: "home", route: "/" },
        { title: "Login", icon: "login", route: "/signin" },
        { title: "Signup", icon: "signup", route: "/signup" },
        { title: "Doctors", icon: "doctors", route: "/doctors" },
        {
          title: "Register your Practice",
          icon: "doctors",
          route: "/doctor/signup",
        },
        {
          title: "Login to your Practice",
          icon: "doctors",
          route: "/doctor/login",
        },
        { title: "Doctor's Profile", icon: "profile", route: "/profile" },
      ])
    : ([
        { title: "Home", icon: "home", route: "/" },
        { title: "Login", icon: "login", route: "/signin" },
        { title: "Signup", icon: "signup", route: "/signup" },
        { title: "Doctors", icon: "doctors", route: "/doctors" },
        {
          title: "Register your Practice",
          icon: "doctors",
          route: "/doctor/signup",
        },
        {
          title: "Login to your Practice",
          icon: "doctors",
          route: "/doctor/login",
        },
      ]);
  return (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      PaperProps={{ sx: { minWidth: 200 } }}
    >
      <List>
        {NavItems.map((item) => (
          <NavItem
            key={item.title}
            icon={item.icon}
            text={item.title}
            route={item.route}
            setDrawerOpen={setDrawerOpen}
          />
        ))}
      </List>
    </Drawer>
  );
};
export { NavDrawer };
