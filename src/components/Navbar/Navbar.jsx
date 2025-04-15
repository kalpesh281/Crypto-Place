import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { UserPlus } from "lucide-react";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
        <div className="nav-right">
          <select>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
          </select>
          <button className="signup-btn">
            Sign up <UserPlus size={18} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
