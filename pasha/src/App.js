import { Box, Button } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from './Components/NavBar';

export default function App() {
  return (
    <Router>
      <div>
        <NavBar/>
      </div>
    </Router>
  );
}

