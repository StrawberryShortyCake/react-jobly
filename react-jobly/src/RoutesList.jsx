import { Route, Routes, Navigate } from "react-router-dom";
import Jobs from "./Jobs";
import Companies from "./Companies";
import Home from "./Home";
import CompanyDetails from "./CompayDetails";

/**
 * Purpose: route to different components based on Nav links
 *
 * Props: none
 * States: none
 *
 *  App > RoutesList
 */
function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/companies/:handle" element={<CompanyDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
