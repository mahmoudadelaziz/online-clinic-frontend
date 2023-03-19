import { Layout } from "./components";
import { Outlet, Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "./pages";

const App = () => {
  return (
    <div className="layout">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
};
export { App };
