import React from 'react'
import Image from 'next/image'
import { NavDesk } from './svgs/Nav'

const HeroSection = () => {
  return (
    <>
      <div className='hero'>
        <div className='hero__nav'>
          <NavDesk />
        </div>
        <div className='hero__logo'>
          <Image
            src='/walborg-event.svg'
            width='210px'
            height='210px'
            alt='Walborg event'
          />
        </div>
        <div className='hero__video-container'>
          <video className='hero__video-container--video' autoPlay muted loop alt="Stämmningsfullt event i eventlokalen">
            <source src='/heroVid.webm' type='video/webm' />
          </video>
        </div>
      </div>
    </>
  )
}

export default HeroSection
