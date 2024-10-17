import { Route, Navigate, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Password from "./pages/Password";
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard";
import MissingPage from "./pages/MissingPage";
import Layout from "./layout/Layout";
import App from "./App";
import { PATH } from "./config";
import PatientManagement from "./pages/PatientManagement/i";
import Provider from "./pages/Provider/Index";
import Home from "./pages/Home";

function Private() {
  const auth = true;
  return auth ? <Layout /> : <Navigate to={PATH.SIGN_IN} state={{ from: location }} />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PATH.SIGN_IN} element={<App />}>
      <Route index element={<SignIn />} />
      <Route path={PATH.SIGN_UP} element={<SignUp />} />
      <Route path={PATH.FORGET_PASSWORD} element={<Password />} />
      <Route path={PATH.RESET_PASSWORD} element={<Password />} />
      <Route path={PATH.PROFILE_PAGE} element={<Profile />} />
      <Route element={<Private />}>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.DASHBOARD} element={<Dashboard />} />
        <Route path={PATH.PATIENT} element={<PatientManagement />} />
        <Route path={PATH.PATIENT_MANAGEMENT} element={<PatientManagement />} />
        <Route path={PATH.PROVIDER} element={<Provider />} />
      </Route>
      <Route path={PATH.NO_PAGE} element={<MissingPage />} />
    </Route>
  )
);

export default router;