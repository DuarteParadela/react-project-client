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
        {context.isLoggedIn && context.user.isAdmin && (
          <li>
            <NavLink to="/dashboard">
              Dashboard
            </NavLink>
          </li>   
        )}
    {context.isLoggedIn && (
      <>
      <li>
        <NavLink to="/profile">
        {context.user && context.user.firstName}
          </NavLink>
      </li>
      <li>
              <NavLink to="/request">
              Make a request
                </NavLink>
            </li>
            <li>
              <NavLink to="/myrequests">
              My requests
                </NavLink>
            </li>
            <li>
              <NavLink to="/becomesafehome">
              Become a Safe Home
                </NavLink>
            </li>
            <li>
              <NavLink to="/myhome">
              My home
                </NavLink>
            </li>
      </>
    )}
            {context.isLoggedIn && context.user.isAdmin && (
          
            <li>
              <NavLink to="/safehomes">
              Safe homes
                </NavLink>
            </li>
        )}
            
            
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