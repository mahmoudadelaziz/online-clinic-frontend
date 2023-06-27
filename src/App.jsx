import { Layout } from "./components";
import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp, Doctors, DoctorPage, DoctorProfile } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorPage />} />
        <Route path="/profile" element={<DoctorProfile />} />
      </Route>
    </Routes>
  );
};
export { App };
