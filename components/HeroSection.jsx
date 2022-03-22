import React, { useEffect, useState } from 'react'
import { NavDesk } from './svgs/Nav'

const HeroSection = () => {
  // const [width, setWidth] = useState(true)

  //   useEffect(() => {
  //     window.addEventListener('resize', handleResize)
  //     return () => {
  //       window.removeEventListener('resize', handleResize)
  //     }
  //   }, [])

  //   const handleResize = () => {
  //    let screenWidth = window.innerWidth
  //    setWidth(screenWidth)
  //   }

  {
    /* <NavDesk width={width} /> */
  }

  return (
    <>
      <div className='hero'>
        <div className='hero__nav'>
          <NavDesk />
        </div>
      </div>
    </>
  )
}

export default HeroSection
