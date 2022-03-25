import React from 'react'
import Image from 'next/image'
import { NavDesk } from './svgs/Nav'

const HeroSection = () => {
  return (
    <>
      <div className='hero'>
        <div className='hero__nav--desktop'>
          <NavDesk />
        </div>
        <div className='hero__nav--mobile'>
        <Image
            src='/mobile-nav.svg'
            width='900px'
            height='394.7px'
            alt='Walborg event'
          />
        </div>
        <div className='hero__logo'>
          <Image
            src='/walborg-event.svg'
            width='450px'
            height='450px'
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
