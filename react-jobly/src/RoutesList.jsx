import { Route, Routes, Navigate } from "react-router-dom";
import JobList from "./JobList";
import Companies from "./CompanyList";
import Home from "./Home";
import CompanyDetails from "./CompanyDetails";

/**
 * Purpose: route to different components based on Nav links
 *
 * Props: none
 * States: none
 *
 *  App > RoutesList
 */
function RoutesList() {
  console.log("RoutesList");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/companies/:handle" element={<CompanyDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
