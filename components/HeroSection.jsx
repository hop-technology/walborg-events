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
            width={900}
            height={394.7}
            alt='Walborg event'
          />
        </div>
        <div className='hero__logo'>
          <Image
            src='/walborg-event.svg'
            width={300}
            height={300}
            alt='Walborg event'
          />
        </div>
        <div className='hero__video-container'>
          <video
            className='hero__video-container--video'
            autoPlay
            muted
            loop
            alt='Stämmningsfullt event i eventlokalen'>
            <source src='/heroVid.webm' type='video/webm' />
          </video>
        </div>
      </div>
    </>
  )
}

export default HeroSection
