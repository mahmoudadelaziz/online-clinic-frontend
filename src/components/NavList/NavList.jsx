import { NavItem } from "../NavItem/NavItem";
import "./NavList.css";

const NavList = ({ isOpen }) => {
  const NavItems = [
    { title: "Home", icon: "home" },
    { title: "Login", icon: "login" },
    { title: "Signup", icon: "person_add" },
  ];
  return (
    <ul className="nav__list">
      {NavItems.map((item) => (
        <NavItem
          key={item.title}
          iconName={item.icon}
          linkName={item.title}
          isOpen={isOpen}
        />
      ))}
    </ul>
  );
};
export { NavList };
