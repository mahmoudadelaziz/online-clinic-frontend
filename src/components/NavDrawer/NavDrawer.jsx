import { NavList } from "../NavList/NavList";

const NavDrawer = () => {
  return (
    <nav className="nav expand-nav-drawer">
      <div className="nav__header">
        <h2 className="brand">Clinic</h2>
        <span className="material-symbols-outlined menu">menu</span>
      </div>
      <div className="nav__links">
        <NavList />
      </div>
    </nav>
  );
};

export { NavDrawer };
