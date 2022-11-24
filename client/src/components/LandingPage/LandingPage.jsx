import "./LandingPage.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Landing() {
    const Icono = require.context('../../img', true);
    return (
    <div className="contenedor">
      <div>
        <img
          src={Icono(`./textt.png`).default}
          alt=""
          width="700px"
          height="270px"
          className="logoLand"
        />
      </div>
      <br />
      <NavLink to="/home">
        <button className="Button">GO TO HOME</button>
      </NavLink>
    </div>
  );
}

export default Landing;