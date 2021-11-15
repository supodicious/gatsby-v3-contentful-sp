import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AssetsList from "./AssetsList"

const query = graphql`
  {
    allContentfulAsset(sort: { fields: code, order: ASC }) {
      nodes {
        id
        code
        stellarExpertLink
        issuer
        name
        desc {
          desc
        }
        conditions
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
const AllAssets = () => {
  const data = useStaticQuery(query)
  const assets = data.allContentfulAsset.nodes

  return (
    <section className="assets-container">
      <AssetsList assets={assets} />
    </section>
  )
}

export default AllAssets
