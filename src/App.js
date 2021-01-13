import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavMain from "./components/NavMain";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Signin from "./pages/FormSignin";
import Signup from "./pages/FormSignup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={AdminDashboard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
      </Switch>
    </div>
  );
}

export default App;
