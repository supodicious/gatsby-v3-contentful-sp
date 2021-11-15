import React, { useState } from "react"
import { Link } from "gatsby"
import { StyledNavbar } from "./styles/Navbar.styled"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import onClickOutside from "react-onclickoutside"
import Logo from "../assets/images/logo.svg"
import ButtonLogo from "../assets/images/stellar-anchors.svg"
import AnchorLogo from "../assets/images/stellar-anchors-clear.svg"
import Header from "./Header"

const Navbar = () => {
  const [show, setShow] = useState(false)
  const toggle = () => setShow(!show)

  Navbar.handleClickOutside = () => setShow(false)

  return (
    <StyledNavbar>
      <Container>
        <Flex>
          <nav className="navbar">
            <div className="nav-center">
              <div className="nav-header">
                <Link to="/">
                  <img
                    className="nav-header-logo"
                    src={Logo}
                    alt="stellar anchors"
                  />
                </Link>
                <button className="nav-btn" onClick={() => setShow(toggle)}>
                  <img
                    className="nav-btn-img"
                    src={ButtonLogo}
                    alt="stellar anchors"
                  />
                </button>
              </div>
              <div className={show ? "nav-links show-links" : "nav-links"}>
                <img
                  className="nav-logo-img"
                  src={AnchorLogo}
                  alt="anchor logo"
                />
                <Link
                  to="/"
                  className="nav-link"
                  activeClassName="active-link"
                  onClick={() => setShow(false)}
                >
                  home
                </Link>
                <Link
                  to="/assets"
                  className="nav-link"
                  activeClassName="active-link"
                  onClick={() => setShow(false)}
                >
                  assets
                </Link>
                <Link
                  to="/cooperatives"
                  className="nav-link"
                  activeClassName="active-link"
                  onClick={() => setShow(false)}
                >
                  cooperatives
                </Link>
                <Link
                  to="/mission"
                  className="nav-link"
                  activeClassName="active-link"
                  onClick={() => setShow(false)}
                >
                  mission
                </Link>
                <div className="nav-link contact-link">
                  <Link
                    to="/contact"
                    className="btn"
                    onClick={() => setShow(false)}
                  >
                    contact
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </Flex>
      </Container>
      <Header />
    </StyledNavbar>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => Navbar.handleClickOutside,
}

export default onClickOutside(Navbar, clickOutsideConfig)
