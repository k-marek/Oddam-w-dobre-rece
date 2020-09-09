import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";

const HomeSteps = () => {
  return (
    <>
      <Router>
        <div className="steps-container" name="steps">
          <h1>Wystarczą 4 proste kroki</h1>
          <div className="steps-content">
            <div className="steps-element">
              <p className="el1">Wypierz rzeczy</p>
              <div className="line"></div>
              <p>ubrania, zabawki, strzęt i inne</p>
            </div>
            <div className="steps-element">
              <p className="el2">Spakuj je</p>
              <div className="line"></div>
              <p>skorzystaj z worków na śmieci</p>
            </div>
            <div className="steps-element">
              <p className="el3">Zdecyduj komu chcesz pomóc</p>
              <div className="line"></div>
              <p>wybierz zaufane miejsce</p>
            </div>
            <div className="steps-element">
              <p className="el4">Zamów kuriera</p>
              <div className="line"></div>
              <p>kurier przyjedzie w dogodnym terminie</p>
            </div>
          </div>
          <NavLink exact to="/logowanie">
            Oddaj rzeczy
          </NavLink>
        </div>
      </Router>
    </>
  );
};

export default HomeSteps;
