import { Route, Routes, Navigate } from "react-router-dom";
import JobList from "./JobList";
import CompanyList from "./CompanyList";
import Home from "./Home";
import CompanyDetails from "./CompanyDetails";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Logout from "./Logout";
import ProfileForm from "./ProfileForm";
import "./RoutesList.css";

/**
 * Purpose: route to different components based on URLs
 *
 * Props: none
 * States: none
 *
 *  App > RoutesList
 */
function RoutesList({ login, signup, logout }) {
  console.log("RoutesList");

  return (
    <div className="RoutesList">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/signup" element={<SignupForm signup={signup} />} />
        <Route path="/logout" element={<Logout logout={logout} />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:handle" element={<CompanyDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RoutesList;
