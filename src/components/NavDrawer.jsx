import { Drawer, List } from "@mui/material";
import { NavItem } from "./NavItem";

const NavDrawer = ({ drawerOpen, setDrawerOpen }) => {
  const NavItems = [
    { title: "Home", icon: "home", route: "/" },
    { title: "Login", icon: "login", route: "/signin" },
    { title: "Signup", icon: "signup", route: "/signup" },
    { title: "Doctors", icon: "doctors", route: "/doctor" },
    { title: "Register your Practice", icon: "doctors", route: "/doctor/signup" },
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
            setDrawerOpen={setDrawerOpen}
          />
        ))}
      </List>
    </Drawer>
  );
};

export { NavDrawer };
