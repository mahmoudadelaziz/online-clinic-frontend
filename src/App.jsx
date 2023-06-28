import { Layout } from "./components";
import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp, Doctors, DoctorPage, DoctorSignUp, DoctorSignIn, DoctorProfile } from "./pages";

const App = () => {
  console.log(location.pathname)
  return (
    <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorPage />} />
        <Route path="/profile" element={<DoctorProfile />} />
        <Route path="/doctor/signup" element={<DoctorSignUp />} />
        <Route path="/doctor/login" element={<DoctorSignIn />} />
      </Route>
    </Routes>
    </div>
  );
};
export { App };
