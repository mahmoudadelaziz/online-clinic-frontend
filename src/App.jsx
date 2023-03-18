import { NavDrawer } from "./components";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="layout">
      <NavDrawer />
      <Outlet />
    </div>
  );
};
export { App };
