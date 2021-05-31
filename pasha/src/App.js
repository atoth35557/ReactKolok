import { Box, Button } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage_48691 from "./Components/HomePage_48691";
import NavBar from "./Components/NavBar";
import RegisterForm from "./Components/RegisterForm";
import TopNavigation_48691 from "./Components/TopNavigation_48691";

export default function App() {
  return (
    <Router>
      <div>
        <TopNavigation_48691 />
        <Switch>
          <Route path="/">
            <RegisterForm />
          </Route>
          <Route path="/home">
            <HomePage_48691 />
          </Route>
        </Switch>
        {/* <NavBar/> */}
      </div>
    </Router>
  );
}
