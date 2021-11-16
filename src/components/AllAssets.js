import React from "react"
import AssetsList from "./AssetsList"
import Data from '../assets/data/sa-toml.json'
const AllAssets = () => {
  const assets = Data.CURRENCIES

  console.log(Data.CURRENCIES);

  return (
    <section className="assets-container">
      <AssetsList assets={assets} />
    </section>
  )
}

export default AllAssets
