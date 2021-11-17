import React from "react"
import { Link } from "gatsby"
import { StyledFooter } from "./styles/Footer.styled"

const Footer = () => {
  return (
    <StyledFooter>
      <footer className="page-footer">
        <p>
          <Link to="/" className="sagc">
            Stellar Anchors Global Cooperative
          </Link>{" "}
          &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </StyledFooter>
  )
}

export default Footer
