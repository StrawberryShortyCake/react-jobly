import { Navigate } from "react-router-dom";

/** Component for logging a user out
 *
 * Props:
 * - logout: function
 *
 * State: none
 *
 * RoutesList -> Logout
*/

function Logout({ logout }) {
  logout();
  return <Navigate to="/" />;
}

export default Logout;
