import { NavDrawer } from "../../components";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <>
      <NavDrawer />
      <Outlet />
    </>
  );
};
export { Layout };
