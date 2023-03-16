const NavItem = ({ iconName, linkName }) => {
  return (
    <li className="nav__link">
      <span className="material-symbols-outlined">{iconName}</span>
      <span className="link-text expand-nav-item-text">{linkName}</span>
    </li>
  );
};

export { NavItem };
