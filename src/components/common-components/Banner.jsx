import React from 'react'
import './banner.css'

const Banner = ({image}) => {
  return (
    <div className='homepage-banner-conatiner'>
      <img className='homepage-banner-image' src={image} width="100%" height="500px" />
    </div>
  )
}

export default Banner