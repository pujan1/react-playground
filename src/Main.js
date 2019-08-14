import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Games from "./components/Games";
import Nav from "./components/Nav";
import Streams from "./components/Streams";
import "./main.css";

const Main = () => {
  return (
    <Router>
      <Route exact path="/" component={Games} />
      <Route path="/streams" component={Streams} />
      <Nav />
    </Router>
  );
};

export default Main;
