import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

const INITIAL_STATE = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
};

/** Component for signup form
 *
 * Props:
 * - signup: function
 *
 * State:
 * - formData: {
 * username: string,
 * password: string,
 * firstName: string,
 * lastName: string,
 * email: string
 * }
 *
 * RoutesList -> SignupForm
 */
function SignupForm({ signup, user }) {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    signup(formData);
    navigate("/");
  }

  return (
    <form className="SignupForm" onSubmit={handleSubmit}>
      <label htmlFor="SignupForm-username">Username</label>
      <input
        id="SignupForm-username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <label htmlFor="SignupForm-password">Password</label>
      <input
        id="SignupForm-password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <label htmlFor="SignupForm-firstName">First Name</label>
      <input
        id="SignupForm-firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <label htmlFor="SignupForm-lastName">Last Name</label>
      <input
        id="SignupForm-lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <label htmlFor="SignupForm-email">Email</label>
      <input
        id="SignupForm-email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      {user !== null && user.error !== undefined && <Alert msg={user.error} />}
      <button>Submit</button>
    </form>
  );
}

export default SignupForm;
