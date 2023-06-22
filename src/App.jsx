import { Layout } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn, SignUp, Doctors, Doctor } from "./pages";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: Infinity,
//       cacheTime: Infinity,
//     },
//   },
// });

const App = () => {
  return (
      //  <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<Doctor />} />
      </Route>
    </Routes>
      // </ QueryClientProvider>
  );
};
export { App };
