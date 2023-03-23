import { NavItem } from "../NavItem/NavItem";
import "./NavList.css";

const NavList = ({ isOpen }) => {
  const NavItems = [
    { title: "Home", icon: "home", route: "/" },
    { title: "Login", icon: "login", route: "/signin" },
    { title: "Signup", icon: "person_add", route: "/signup" },
    { title: "Doctors", icon: "stethoscope", route: "/doctors" },
  ];
  return (
    <ul className="nav__list">
      {NavItems.map((item) => (
        <NavItem
          key={item.title}
          iconName={item.icon}
          linkName={item.title}
          route={item.route}
          isOpen={isOpen}
        />
      ))}
    </ul>
  );
};
export { NavList };
