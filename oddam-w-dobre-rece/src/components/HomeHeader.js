import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";
import * as Scroll from "react-scroll";
import {
  Link as LinkScroll,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const HomeHeader = () => {
  return (
    <>
      <Router>
        <header name="start">
          <section className="left-section"></section>
          <section className="right-section">
            <div className="container-nav">
              <nav className="login-nav">
                <ul>
                  <NavLink exact to="/logowanie">
                    Zaloguj
                  </NavLink>
                  <NavLink to="/register">Załóż konto</NavLink>
                </ul>
              </nav>
              <nav className="menu-nav">
                <ul>
                  <LinkScroll to="start" smooth={true}>
                    Start
                  </LinkScroll>
                  <LinkScroll to="columns" smooth={true}>
                    O co chodzi?
                  </LinkScroll>
                  <LinkScroll to="aboutUs" smooth={true}>
                    O nas
                  </LinkScroll>
                  <LinkScroll to="foundations" smooth={true}>
                    Fundacje i organizacje
                  </LinkScroll>
                  <LinkScroll to="contact" smooth={true}>
                    Kontakt
                  </LinkScroll>
                </ul>
              </nav>
            </div>
            <div className="container-content">
              <div className="header-content">
                <h1>
                  Zacznij pomagać! <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                </h1>
                <div className="header-btns">
                  <NavLink exact to="/logowanie">
                    Oddaj rzeczy
                  </NavLink>
                  <NavLink exact to="/logowanie">
                    Zorganizuj zbiórkę
                  </NavLink>
                </div>
              </div>
            </div>
          </section>
        </header>
      </Router>
    </>
  );
};

export default HomeHeader;
