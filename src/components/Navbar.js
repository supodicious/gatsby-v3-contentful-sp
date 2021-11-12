import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../assets/images/logo.svg"
import saLogo from "../assets/images/stellar-anchors.svg"
import onClickOutside from "react-onclickoutside"

const Navbar = () => {
  const [show, setShow] = useState(false)
  const toggle = () => setShow(!show)

  Navbar.handleClickOutside = () => setShow(false)

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img className="nav-header-logo" src={logo} alt="stellar anchors" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(toggle)}>
            <img className="nav-btn-img" src={saLogo} alt="stellar anchors" />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            assets
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            tags
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={() => setShow(false)}>
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => Navbar.handleClickOutside,
}

export default onClickOutside(Navbar, clickOutsideConfig)
