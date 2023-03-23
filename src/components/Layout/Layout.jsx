import { NavDrawer } from "../../components";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <>
      <NavDrawer />
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
};
export { Layout };
