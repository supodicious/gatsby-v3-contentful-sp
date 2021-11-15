import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import AllAssets from "../components/AllAssets"

const Assets = () => {
  return (
    <Layout>
      <SEO title="Assets" />
      <main className="page">
        <AllAssets />
      </main>
    </Layout>
  )
}

export default Assets
