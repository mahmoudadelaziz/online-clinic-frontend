import { NavItem } from "../NavItem/NavItem";
const NavList = () => {
  const NavItems = [
    { title: "Home", icon: "home" },
    { title: "Login", icon: "login" },
    { title: "Signup", icon: "person_add" },
  ];
  return (
    <ul className="nav__list">
      {NavItems.map((item) => (
        <NavItem iconName={item.icon} linkName={item.title} />
      ))}
    </ul>
  );
};
export { NavList };
