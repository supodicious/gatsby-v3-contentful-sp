import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Header from "../components/Header"
import AllAssets from "../components/AllAssets"
import AssetSlider from "../components/AssetSlider"

import "normalize.css"
import "../assets/css/main.css"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className='header-background'>
        <Header />
      </div>
      <main className='page'>
        {/* <AllAssets /> */}
        <AssetSlider />
      </main>
    </Layout>
  )
}

// https://youtu.be/JlxXHlygVLM?t=31910
