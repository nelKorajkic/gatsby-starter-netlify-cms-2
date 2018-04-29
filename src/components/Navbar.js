import React from "react";
import Link from "gatsby-link";

// import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start" />
      <div className="navbar-end">
        <Link activeClassName="is-active" className="navbar-item" to="/about">
          About
        </Link>
        <Link activeClassName="is-active" className="navbar-item" to="/products">
          Products
        </Link>
        <Link activeClassName="is-active" className="navbar-item" to="/blog">
          Blog
        </Link>
        <Link activeClassName="is-active" className="navbar-item" to="/episodes">
          Episodes
          <span className="underline" />
        </Link>
        <Link activeClassName="is-active" className="navbar-item" to="/submitQuestion">
          Submit A Question
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
