import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StyledAssetsList } from "./styles/AssetsList.styled"
import slugify from "slugify"

const AssetsList = ({ assets = [] }) => {
  return (
    <StyledAssetsList>
      <div className="assets-list">
        {assets.map(asset => {
          const {
            id,
            code,
            stellarExpertLink,
            issuer,
            name,
            desc,
            conditions,
            image,
          } = asset
          const imageSrc = getImage(image)

          if ({ code }?.code) {
            const slug = slugify({ code }.code, { lower: true })

            return (
              <Link key={id} to={`/${slug}`} className="asset">
                <div className="asset-card">
                  <div className="asset-logo">
                    <GatsbyImage
                      image={imageSrc}
                      className="asset-img"
                      alt={name}
                      // layout="fixed"
                      placeholder="tracedSVG"
                    />
                  </div>
                  <div className='code-name'>
                    <p className='asset-code'>{code}</p>
                    <p className='asset-name'>{name}</p>
                  </div>
                </div>
              </Link>
            )
          }
        })}
      </div>
    </StyledAssetsList>
  )
}

export default AssetsList
