import React from "react";
import Link from "gatsby-link";

// import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      {/* <div className="navbar-brand" /> */}
      {/* <div className="navbar-start" /> */}
      <div className="navbar-end">
        <Link activeClassName="is-active" className="navbar-item" exact to="/">
          Home
          <span className="underline" />
        </Link>
        {/* <Link activeClassName="is-active" className="navbar-item" to="/about">
          About
          <span className="underline" />
        </Link>
        <Link activeClassName="is-active" className="navbar-item" to="/products">
          Products
          <span className="underline" />
        </Link> */}
        <Link activeClassName="is-active" className="navbar-item" to="/blog">
          Blog
          <span className="underline" />
        </Link>
        <Link activeClassName="is-active" className="navbar-item" to="/episodes">
          Episodes
          <span className="underline" />
        </Link>
        <Link activeClassName="is-active" className="navbar-item" to="/submitQuestion">
          Submit A Question
          <span className="underline" />
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
