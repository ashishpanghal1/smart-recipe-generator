import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="/upload" className={({ isActive }) => (isActive ? "active" : "")}>
        Upload Image
      </NavLink>
    </nav>
  );
};

export default Navbar;
