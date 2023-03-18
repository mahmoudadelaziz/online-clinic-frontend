import { Link } from "react-router-dom";
import "./NavItem.css";
const NavItem = ({ iconName, linkName, isOpen, route }) => {
  const animationClass = isOpen ? "show-nav-item-text" : "hide-nav-item-text";
  return (
    <Link to={`${route}`}>
      <li className="nav__link">
        <span className="material-symbols-outlined">{iconName}</span>
        <span className={`link-text ${animationClass}`}>{linkName}</span>
      </li>
    </Link>
  );
};

export { NavItem };
