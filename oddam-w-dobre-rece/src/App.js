import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";
import * as Scroll from "react-scroll";
import {
  Link as LinkS,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/logowanie" component={Login} />
            <Route path="/rejestracja" component={Register} />
          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;
