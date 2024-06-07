import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Nav from "./Nav.jsx";
import RoutesList from "./RoutesList.jsx";
import JoblyApi from "./api.js";
import userContext from "./userContext.js";

/** Component for entire page.
 *
 * Props: none
 *
 * Context:
 * - firstName
 * - lastName
 *
 * State:
 * - user
 *
 * App -> {Nav, RoutesList}
 *
 */

function App() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  /** Add a token to JoblyApi and logs a user in */
  async function logIn(formData) {
    // call the API class for log user in
    await JoblyApi.logIn(formData);
    const token = JoblyApi.token;
    localStorage.setItem("token", token);

    // update the user state with the result of the getUser API call
    const user = await JoblyApi.getUser(formData.username);
    localStorage.setItem("username", user.username);
    setUser(user);
  }

  /** Registers a user, adds a token to JoblyApi, and logs a user in */
  async function signUp(formData) {
    // call the API class for sign user up
    await JoblyApi.signUp(formData);
    const token = JoblyApi.token;
    localStorage.setItem("token", token);

    // update the user state with the result of the getUser API call
    const user = await JoblyApi.getUser(formData.username);
    localStorage.setItem("username", user.username);
    setUser(user);
  }

  /** Logs a user out */
  function logOut() {
    setUser(null);
    JoblyApi.logOut();
    console.log("TOKEN", JoblyApi.token);
  }

  // TODO: rename this function
  /** Function to log a user in if token in localStorage */
  async function getUser() {
    const username = localStorage.getItem("username");
    const user = await JoblyApi.getUser(username, token);
    setUser(user);
  }

  useEffect(function () {
    const token = localStorage.getItem("token");
    if (token !== "undefined") {
      getUser();
    }
  }, []);

  // function editUser() {}  TODO: tbd at a later step

  return (
    <div className="App">
      <userContext.Provider value={{ user }}>
        <BrowserRouter>
          <Nav user={user} />
          <RoutesList
            login={logIn}
            signup={signUp}
            logout={logOut}
            user={user}
          />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
