import React from "react"
import Navbar from "./Navbar"
import Header from "./Header"
import Footer from "./Footer"
import { Container } from "./styles/Container.styled"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
