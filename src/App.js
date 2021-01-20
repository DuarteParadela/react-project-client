import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Request from "./pages/Request";
import MyRequests from "./pages/MyRequests";
import BecomeSafeHome from "./pages/BecomeSafeHome";
import SafeHomes from "./pages/SafeHomes";
import MyHome from "./pages/MyHome";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/dashboard" component={AdminDashboard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/request" component={Request} />
        <Route exact path="/myrequests" component={MyRequests} />
        <Route exact path="/becomesafehome" component={BecomeSafeHome} />
        <ProtectedRoute exact path="/safehomes" component={SafeHomes} />
        <Route exact path="/myhome" component={MyHome} />
      </Switch>
    </div>
  );
}

export default App;
