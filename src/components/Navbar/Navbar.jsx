import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";

function Navbar() {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({
          name: "usd",
          symbol: "$",
        });
        break;
      case "eur":
        setCurrency({
          name: "eur",
          symbol: "€",
        });
        break;
      case "inr":
        setCurrency({
          name: "inr",
          symbol: "₹",
        });
        break;
      default:
        setCurrency({
          name: "usd",
          symbol: "$", 
        })
        break;
    }
  };

  // Render the navbar component
  return (
    <>
      {/* Main navbar container */}
      <div className="navbar">
        {/* Logo with link to home page */}
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        {/* Navigation links */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
        {/* Right side of navbar with currency selector and sign-up button */}
        <div className="nav-right">
          {/* Currency dropdown selector */}
          <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
          </select>
          {/* Sign-up button with icon */}
          <button className="signup-btn">
            Sign up <UserPlus size={18} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
