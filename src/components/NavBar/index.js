import React, { useState } from "react";
import { BsHeart, BsSearch } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";
import "./index.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-items-container">
        <div className="navbar">
          <button className="navbar-toggler" onClick={toggleNavbar}>
            ☰
          </button>
          <img
            src="https://res.cloudinary.com/dssaftaaa/image/upload/v1723957526/Logo_dnwyxk.png"
            alt="logo"
            className="navbar-logo-img"
          />
        </div>
        <div>
          <h1 className="navbar-logo">LOGO</h1>
        </div>
        <div >
          <BsSearch className="navbar-icon"/>
          <BsHeart className="navbar-icon"/>
          <FaBagShopping className="navbar-icon"/>
        </div>
      </div>
      <hr className="hr-line"/>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <p className="navbar-link">SHOP</p>
        <p className="navbar-link">SKILLS</p>
        <p className="navbar-link">STORIES</p>
        <p className="navbar-link">ABOUT</p>
        <p className="navbar-link">CONTACT US</p>
      </div>
    </div>
  );
}
export default NavBar;
