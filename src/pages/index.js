import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Header from "../components/Header"
import AllAssets from "../components/AllAssets"

import "normalize.css"
import "../assets/css/main.css"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <main className="page">
        <AllAssets />
      </main>
    </Layout>
  )
}

// https://youtu.be/JlxXHlygVLM?t=31910
