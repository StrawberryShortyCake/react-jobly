import { useNavigate } from "react-router-dom";

function Logout({ logout }) {
  const navigate = useNavigate();

  logout();
  navigate("/");
}

export default Logout;
