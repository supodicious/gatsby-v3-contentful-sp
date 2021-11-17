import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { StyledAssetTemplate } from "../components/styles/AssetTemplate.styled"

const AssetTemplate = ({ data }) => {
  const {
    code,
    name,
    imageLink,
    desc,
    conditions,
    issuer,
    stellarExpertLink,
  } = data.contentfulAsset

  // console.log(data);

  if ({ code }?.code) {
    return (
      <StyledAssetTemplate>
        <Layout>
          <SEO title={code} description={desc} />
          <main className="page">
            <div className="recipe-page">
              <section className="asset-info-top">
                <div className="code-n-image">
                  <img src={imageLink} alt={name} className="asset-img" />
                  <h2>{code}</h2>
                </div>
                <div className="desc">{desc.desc}</div>
              </section>
              <article className="asset-info">
                <div className="conditions">{conditions}</div>
                <div>Issuer:</div>
                <div className="issuer">{issuer}</div>
                <div className='stellar-expert'>Current data for {code} available at stellar.expert</div>
                <a
                  className="btn stellar-expert-btn"
                  href={stellarExpertLink}
                  target="_blank"
                >
                  stellar
                  <img className='st-ex-btn-img' src="https://stellar.expert/img/stellar-expert-blue.svg" alt="stellar expert" />
                  expert
                </a>
              </article>
            </div>
          </main>
        </Layout>
      </StyledAssetTemplate>
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
