import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const AssetTemplate = ({ data }) => {
  const { code, name, desc, image } = data.contentfulAsset
  const imageSrc = getImage(image)

  if ({ code }?.code) {
    return (
      <Layout>
        <SEO title={code} description={desc} />
        <main className="page">
          <div className="recipe-page">
            <section className="recipe-hero">
              <img src={imageSrc} alt={name} className="about-img" />
              <article className="recipe-info">
                <h2>{{ code }.code}</h2>
                <p>{desc.desc}</p>
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
      desc {
        desc
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default AssetTemplate
