import { NavLink } from "react-router-dom";
import "./Nav.css";

/**
 * Purpose: renders links for nav bar
 *
 * Props: none
 * State: none
 */
function Nav() {
  const activeStyle = {
    color: "burlywood",
    textDecoration: "none",
  };

  return (
    <div className="Nav">
      <div>
        <NavLink to="/" style={activeStyle}>
          Jobly
        </NavLink>
      </div>
      <div className="Nav-menu">
        <NavLink to="/jobs" style={activeStyle}>
          Jobs
        </NavLink>
        <NavLink to="/companies" style={activeStyle}>
          Companies
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
