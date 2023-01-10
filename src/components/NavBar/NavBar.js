import React from "react";
import { NavLink } from "react-router-dom";
import "../NavBar/NavBar.css";

const NavBar = () => {
  return (
    <header>
      <NavLink to="/" activeClassName="active">
        <h1>The Source</h1>
      </NavLink>
    </header>
  );
};

export default NavBar;
