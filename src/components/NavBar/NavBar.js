import React from "react";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>The Source</h1>
      </Link>
    </header>
  );
};

export default NavBar;
