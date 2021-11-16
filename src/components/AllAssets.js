import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import AssetsList from "./AssetsList"
import Data from '../assets/data/sa-toml.json'

// const query = graphql`
//   {
//     allContentfulAsset(sort: { fields: code, order: ASC }) {
//       nodes {
//         id
//         code
//         stellarExpertLink
//         issuer
//         name
//         desc {
//           desc
//         }
//         conditions
//         image {
//           gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
//         }
//       }
//     }
//   }
// `
const AllAssets = () => {
  // const data = useStaticQuery(query)
  const assets = Data.CURRENCIES

  // console.log(Data.CURRENCIES);

  return (
    <section className="assets-container">
      <AssetsList assets={assets} />
    </section>
  )
}

export default AllAssets
