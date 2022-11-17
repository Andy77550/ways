import React, { useState } from "react";
import logo from "../../logo.png";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={ navbar ? 'navbar active navbar-expand-sm fixed-top' : 'navbar navbar-expand-sm fixed-top' }>
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="WayTips" width={50} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home">
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                À propos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#fonctions">
                Fonctionnalités
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#prix">
                Prix
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">Blog</a>
            </li>
          </ul>
          <button className="btn btn-1" id="#form">Ton circuit</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
