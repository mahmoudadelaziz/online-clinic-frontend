import { NavLink } from "react-router-dom";
import "./NavItem.css";
const NavItem = ({ iconName, linkName, isOpen, route }) => {
  const animationClass = isOpen ? "show-nav-item-text" : "hide-nav-item-text";
  return (
    <NavLink
      to={`${route}`}
      style={{ marginBottom: "var(--nav-link-spacing)", padding: "5px 0px" }}
    >
      <li className="nav__link">
        <span className="material-symbols-outlined">{iconName}</span>
        <span className={`link-text ${animationClass}`}>{linkName}</span>
      </li>
    </NavLink>
  );
};

export { NavItem };
