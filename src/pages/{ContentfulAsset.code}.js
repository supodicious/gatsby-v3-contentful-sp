import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const AssetTemplate = ({ data }) => {
  const { code, name, imageLink, desc, conditions, issuer, stellarExpertLink } = data.contentfulAsset

  console.log(data);

  if ({ code }?.code) {
    return (
      <Layout>
        <SEO title={code} description={desc} />
        <main className="page">
          <div className="recipe-page">
            <section className="recipe-hero">
              <img src={imageLink} alt={name} className="about-img" />
              <article className="recipe-info">
                <h2>{{ code }.code}</h2>
                <h5>{desc.desc}</h5>
                <h5>{conditions}</h5>
                <h6>{issuer}</h6>
                <h6>{stellarExpertLink}</h6>
              </article>
            </section>
          </div>
        </main>
      </Layout>
    )
  } else {
    return
  }
}

export const query = graphql`
  query getSingleAsset($code: String) {
    contentfulAsset(code: { eq: $code }) {
      code
      name
      imageLink
      desc {
        desc
      }
      conditions
      issuer
      stellarExpertLink
    }
  }
`

export default AssetTemplate
