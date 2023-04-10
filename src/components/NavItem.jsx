import { Link } from "react-router-dom";
import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Login, Home, PeopleAlt, PersonAddAlt1 } from "@mui/icons-material";

const NavItem = ({ route, icon, text, setDrawerOpen }) => {
  const iconsMap = {
    login: <Login />,
    signup: <PersonAddAlt1 />,
    home: <Home />,
    doctors: <PeopleAlt />,
  };
  return (
    <Link to={`${route}`} onClick={() => setDrawerOpen(false)}>
      <ListItemButton>
        <ListItemIcon sx={{ mr: 2 }}>{iconsMap[icon]}</ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItemButton>
      <Divider />
    </Link>
  );
};

export { NavItem };
