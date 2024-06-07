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
 * TODO: explain on mount effects
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
  const [isLoading, setIsLoading] = useState(true);

  /** Add a token to JoblyApi and logs a user in */
  async function logIn(formData) {
    // call the API class for log user in
    await JoblyApi.logIn(formData);
    const token = JoblyApi.token;
    localStorage.setItem("token", token);

    // update the user state with the result of the getUser API call
    const user = await JoblyApi.getUser(formData.username, token);
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
    const user = await JoblyApi.getUser(formData.username, token);
    localStorage.setItem("username", user.username);
    setUser(user);
  }

  /** Logs a user out */
  function logOut() {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    //NOTE: remove these items from localStorage entirely
    JoblyApi.logOut();
    console.log("TOKEN", JoblyApi.token);
  }

  /** Function to log a user in if token in localStorage */
  async function getUser() {
    const username = localStorage.getItem("username");
    const user = await JoblyApi.getUser(username, token);
    console.log("get User", user);
    setUser(user);
  }

  useEffect(function loadTokenUserOnMount() {
    async function loadTokenUser() {
      const token = localStorage.getItem("token");
      if (token !== null) {
        await getUser();
        /**NOTE: we need to await this otherwise we are loading without a user;
         * if we want to return to the original route, cannot re-render until we
         * know there's a user
         */
        setIsLoading(false);
      } else {
        setIsLoading(false);
        /** NOTE: no user in localStorage, no further actions besides rendering
         * the logged out experience
         */
      }
    }
    loadTokenUser();
  }, []);

  if (isLoading) {
    console.log("isLoading rendered");
    return <div>Hey! Loading.</div>;
  }
  /** NOTE: never load a component until we know whether there's a user
   * This allows us to let the useEffect to take place after the first render
   * This is guarding our component
   */

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
