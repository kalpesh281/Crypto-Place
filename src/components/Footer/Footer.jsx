import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Crypto Marketplace</h3>
          <p>
            The world's largest and most trusted cryptocurrency marketplace for
            buying, selling, and managing your digital assets.
          </p>
          <div className="social-icons">
            <Facebook size={20} />
            <Twitter size={20} />
            <Instagram size={20} />
            <Linkedin size={20} />
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>
              <Link to="/">Help Center</Link>
            </li>
            <li>
              <Link to="/">API Documentation</Link>
            </li>
            <li>
              <Link to="/">Market Data</Link>
            </li>
            <li>
              <Link to="/">Trading Tools</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Subscribe</h3>
          <p>Stay updated with the latest crypto news and market trends.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Your email address" />
            <button>
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Crypto Marketplace. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
