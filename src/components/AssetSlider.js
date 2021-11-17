import React from "react"
import { Link } from "gatsby"
import { StyledAssetsList } from "./styles/AssetsList.styled"
import slugify from "slugify"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import Data from "../assets/data/sa-toml.json"
import { StyledAssetSlider } from "./styles/AssetSlider.styled"

const AssetSlider = () => {
  const assets = Data.CURRENCIES

  const items = assets.map(asset => {
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
  })

  const responsive = {
    0: {
      items: 1,
    },
    360: {
      items: 2,
    },
    500: {
      items: 3,
    },
    767: {
      items: 4,
    },
  }

  return (
    <StyledAssetSlider>
      <StyledAssetsList>
        <AliceCarousel
          autoPlay
          autoPlayInterval={1000}
          animationDuration={1500}
          disableButtonsControls
          disableDotsControls
          infinite
          mouseTracking
          responsive={responsive}
          items={items}
        />
      </StyledAssetsList>
    </StyledAssetSlider>
  )
}

export default AssetSlider
