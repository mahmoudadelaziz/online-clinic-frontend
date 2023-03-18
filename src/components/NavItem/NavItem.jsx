import "./NavItem.css";
const NavItem = ({ iconName, linkName, isOpen }) => {
  const animationClass = isOpen ? "show-nav-item-text" : "hide-nav-item-text";
  return (
    <li className="nav__link">
      <span className="material-symbols-outlined">{iconName}</span>
      <span className={`link-text ${animationClass}`}>{linkName}</span>
    </li>
  );
};

export { NavItem };
