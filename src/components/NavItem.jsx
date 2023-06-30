import { Link } from "react-router-dom";
import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Login, Home, PeopleAlt, PersonAddAlt1 } from "@mui/icons-material";
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

const NavItem = ({ route, icon, text, setDrawerOpen, onClick }) => {
  const iconsMap = {
    login: <Login />,
    logout: <LogoutIcon />,
    signup: <PersonAddAlt1 />,
    home: <Home />,
    profile: <PersonIcon />,
    doctors: <PeopleAlt />,
    doctorsignup: <MedicalInformationIcon />
  };
  return (
    <Link to={`${route}`} onClick={() => {
      setDrawerOpen(false);
      if (onClick) {
        onClick();
      }
    }}>
      <ListItemButton onClick={onClick}>
        <ListItemIcon sx={{ mr: 2 }}>{iconsMap[icon]}</ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItemButton>
      <Divider />
    </Link>
  );
};

export { NavItem };