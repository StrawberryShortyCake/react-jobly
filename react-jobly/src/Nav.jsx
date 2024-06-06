import { NavLink } from "react-router-dom";
import "./Nav.css";

/**
 * Purpose: renders links for nav bar
 *
 * Props: none
 * State: none
 */
function Nav({ user }) {
  const activeStyle = {
    color: "whitesmoke",
    marginLeft: "20px",
    textDecoration: "none",
  };

  return (
    <div className="Nav">
      <div>
        <NavLink to="/" style={activeStyle}>
          Jobly
        </NavLink>
      </div>
      {user === null &&
        <div className="Nav-menu">
          <NavLink to="/login" style={activeStyle}>
            Login
          </NavLink>
          <NavLink to="/signup" style={activeStyle}>
            Signup
          </NavLink>
        </div>
      }
      {user !== null &&
        <div className="Nav-menu">
          <NavLink to="/jobs" style={activeStyle}>
            Jobs
          </NavLink>
          <NavLink to="/companies" style={activeStyle}>
            Companies
          </NavLink>
          <NavLink to="/profile" style={activeStyle}>
            Profile
          </NavLink>
          <NavLink to="/logout" style={activeStyle}>
            Log out {user.username}
          </NavLink>
        </div>
      }
    </div>
  );
}

export default Nav;
