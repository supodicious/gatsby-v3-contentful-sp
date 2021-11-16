import React from "react"
import { Link } from "gatsby"
import { StyledAssetsList } from "./styles/AssetsList.styled"
import slugify from "slugify"

const AssetsList = ({ assets = [] }) => {
  return (
    <StyledAssetsList>
      <div className="assets-list">
        {assets.map(asset => {
          const { code, name, image, desc, conditions, issuer } = asset

          if ({ code }?.code) {
            const slug = slugify({ code }.code, { lower: true })

            return (
              <Link key={code} to={`/${slug}`} className="asset">
                <div className="asset-card">
                  <div className="asset-code-logo">
                    <p className="asset-code">{code}</p>
                    <img src={image} alt={name} className="asset-img" />
                  </div>
                  <div className="asset-name">
                    <p>{name}</p>
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
