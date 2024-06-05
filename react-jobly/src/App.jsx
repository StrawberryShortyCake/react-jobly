import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Nav from "./Nav.jsx";
import RoutesList from "./RoutesList.jsx";

// TODO: do we want to make a loading component?

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
