import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        <Link to='/'>
          Stellar Anchors Global Cooperative
        </Link>{" "}
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
