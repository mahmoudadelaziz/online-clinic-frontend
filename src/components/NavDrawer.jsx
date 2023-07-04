import { Drawer, List } from "@mui/material";
import { NavItem } from "./NavItem";
import { useAuth } from "../AuthContext";

const NavDrawer = ({ drawerOpen, setDrawerOpen }) => {
  const { setUserType, SetAuthUser, isLoggedIn, SetIsLoggedIn } = useAuth();

  const handleLogout = () => {
    // Perform the logout functionality (Clear up the localStorage and the global context state vars)
    console.log("Logging out...")
    SetAuthUser(null);
    setUserType("");
    SetIsLoggedIn(false);
    localStorage.clear();
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
          title: "Register your Clinic",
          icon: "doctors",
          route: "/doctor/signup",
        },
        {
          title: "Login to your Clinic",
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