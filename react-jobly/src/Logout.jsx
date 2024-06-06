import { Navigate } from "react-router-dom";
import Nav from "./Nav";

function Logout({ logout }) {
  logout();
  return <Navigate to="/" />;
}

export default Logout;
