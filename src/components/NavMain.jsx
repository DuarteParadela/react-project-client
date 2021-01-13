import React from "react";
import { NavLink } from "react-router-dom";
import withUser from "./Auth/withUser";
import apiHandler from "../api/apiHandler";

import "../styles/NavMain.css";

const NavMain = (props) => {
  const { context } = props;

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <nav className="NavMain">
      <NavLink exact to="/">
        <h3 className="logo">Safe Home</h3>
      </NavLink>
      <ul className="nav-list">
      <li>
              <NavLink to="/dashboard">
                Dashboard
                </NavLink>
            </li>
            <li>
              <NavLink to="/profile">
              Profile{/* {context.user && context.user.email} */}
                </NavLink>
            </li>
        {context.isLoggedIn && (
          <React.Fragment>
            
            <li>
              <NavLink to="/profile">
                
              </NavLink>
            </li>
            <li>
              <p onClick={handleLogout}>Logout</p>
            </li>
          </React.Fragment>
        )}
        {!context.isLoggedIn && (
          <React.Fragment>
            <li>
              <NavLink to="/signin">Log in</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Create account</NavLink>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default withUser(NavMain);