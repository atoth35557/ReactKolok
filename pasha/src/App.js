import { Box, Button } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from './Components/NavBar';
import RegisterForm from "./Components/RegisterForm";
import TopNavigation_48691 from "./Components/TopNavigation_48691";

export default function App() {
  return (
    <Router>
      <div>
        <TopNavigation_48691/>
        <RegisterForm/>
        {/* <NavBar/> */}
      </div>
    </Router>
  );
}

