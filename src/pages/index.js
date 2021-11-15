import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import AllAssets from "../components/AllAssets"
import { ThemeProvider } from "styled-components"

import "normalize.css"
import "../assets/css/main.css"

const theme = {
  colors: {
    navbar: "#C9EDFF",
    header: "#EBFCFF",
    navlink: "#006699",
    navlinkHover: "#47C2FF",
    body: "#F7F7F7",
    assetCard: '#D8F2FF',
    footer: "#006699",
  },
  mobile: "768px",
}

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home " />
        <main className="page">
          <AllAssets />
        </main>
      </Layout>
    </ThemeProvider>
  )
}

// https://youtu.be/JlxXHlygVLM?t=31910
