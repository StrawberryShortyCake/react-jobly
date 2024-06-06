import { useState } from "react";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = { username: "", password: "" };

/** Component for login form
 *
 * Props:
 * - login: function
 *
 * State:
 * - formData: { username: string, password: string }
 *
 * RoutesList -> LoginForm
*/
function LoginForm({ login }) {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    login(formData);
    navigate("/");
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <label
        htmlFor="LoginForm-username">
        Username
      </label>
      <input
        id="LoginForm-username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <label
        htmlFor="LoginForm-password">
        Password
      </label>
      <input
        id="LoginForm-password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button>Submit</button>
    </form>
  );
}

export default LoginForm;