import { useState } from "react";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  username: "",
  password: "",
  fname: "",
  lname: "",
  email: ""
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
 * fname: string,
 * lname: string,
 * email: string
 * }
 *
 * RoutesList -> SignupForm
*/
function SignupForm({ signup }) {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    signup(formData);
    navigate("/");
  }

  return (
    <form className="SignupForm" onSubmit={handleSubmit}>
      <label
        htmlFor="SignupForm-username">
        Username
      </label>
      <input
        id="SignupForm-username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <label
        htmlFor="SignupForm-password">
        Password
      </label>
      <input
        id="SignupForm-password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <label
        htmlFor="SignupForm-fname">
        First Name
      </label>
      <input
        id="SignupForm-fname"
        name="fname"
        value={formData.fname}
        onChange={handleChange}
        required
      />
      <label
        htmlFor="SignupForm-lname">
        Last Name
      </label>
      <input
        id="SignupForm-lname"
        name="lname"
        value={formData.lname}
        onChange={handleChange}
        required
      />
      <label
        htmlFor="SignupForm-email">
        Email
      </label>
      <input
        id="SignupForm-email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button>Submit</button>
    </form>
  );
}

export default SignupForm;