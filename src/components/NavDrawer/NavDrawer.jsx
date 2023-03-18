import { useState } from "react";
import { NavList } from "../NavList/NavList";
import "./NavDrawer.css";

const NavDrawer = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  const drawerAnimationClass = isOpen
    ? "expand-nav-drawer"
    : "collapse-nav-drawer";
  const brandAnimationClass = isOpen ? "" : "hide-brand";

  return (
    <nav className={`nav ${drawerAnimationClass}`}>
      <div className="nav__header">
        <h2 className={`brand ${brandAnimationClass}`}>Clinic</h2>
        <span className="material-symbols-outlined menu" onClick={handleClick}>
          menu
        </span>
      </div>
      <NavList isOpen={isOpen} />
    </nav>
  );
};

export { NavDrawer };
