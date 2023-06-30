import { Drawer, List } from "@mui/material";
import { NavItem } from "./NavItem";
import { useAuth } from "../AuthContext";
import { redirect } from "react-router-dom";

const NavDrawer = ({ drawerOpen, setDrawerOpen }) => {
  const { authUser, SetAuthUser, isLoggedIn, SetIsLoggedIn } = useAuth();

  const handleLogout = () => {
    // Perform the logout functionality
    console.log("Got to start")
    SetAuthUser(null);
    SetIsLoggedIn(false);
    localStorage.clear();
    console.log("Got to end")
  };

  const NavItems = isLoggedIn
    ? [
        { title: "Home", icon: "home", route: "/" },
        { title: "Doctors", icon: "doctors", route: "/doctors" },
        { title: "Profile", icon: "profile", route: "/profile" },
        {
          title: "Log out",
          icon: "logout",
          onClick: handleLogout,
          route: "/" // Because logging out gets you to homepage
        },
      ]
    : [
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
      ];

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
            onClick={item.onClick}
            setDrawerOpen={setDrawerOpen}
          />
        ))}
      </List>
    </Drawer>
  );
};

export { NavDrawer };