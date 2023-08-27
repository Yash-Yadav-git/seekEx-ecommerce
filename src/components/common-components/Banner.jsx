import React from 'react'
import './banner.css'

const Banner = ({image}) => {
  return (
    <div className='homepage-banner-conatiner'>
      <img className='homepage-banner-image' src={image} />
    </div>
  )
}

export default Banner