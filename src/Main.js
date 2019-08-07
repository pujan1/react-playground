import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Games from "./components/Games";
import Nav from "./components/Nav";
import Streams from "./components/Streams";

const Main = () => {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Games} />
      <Route path="/streams" component={Streams} />
    </Router>
  );
};

export default Main;
