import React from 'react'
import AliceCarousel from 'react-alice-carousel'

const Slider = (items) => {
  return (
    <>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </>
  )
}

export default Slider
