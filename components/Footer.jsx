import Image from 'next/image'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__contact'>
        <p>Telefon: 073-600 44 68</p>
        <a href='mailto: event@walborgventures.com'>
          Email: Event@WalborgVentures.com
        </a>
      </div>
      <div className='footer__shape'>
        <div className='footer__shape--desktop'>
          <Image
            src='/desk-footer.svg'
            width={3840}
            height={1350}
            alt='footer'
          />
        </div>
        <div className='footer__shape--mobile'>
          <Image src='/mob-footer.svg' width={900} height={1460} alt='footer' />
        </div>
        <div className='footer__shape--walborg'>
          <Image
            src='/walborg-event.svg'
            height={700}
            width={700}
            alt='walborg event logo'
          />
        </div>
        <p className='footer__shape--text'>
          walborg kan existera tack vare partnerskap med
        </p>
        <div className='footer__partners'>
          <div className='footer__partners--logo'>
            {' '}
            <a href='https://hoptech.se' target='_blank' rel='noreferrer'>
              <Image
                src='/HOP.webp'
                height={150}
                width={300}
                alt='hop technology logo'
              />
            </a>
          </div>
          <div className='footer__partners--logo'>
            {' '}
            <a href='https://wallenstam.se/' target='_blank' rel='noreferrer'>
              <Image
                src='/wallenstam.webp'
                height={385}
                width={440}
                alt='wallenstam logo'
              />
            </a>
          </div>
          <div className='footer__partners--logo'>
            {' '}
            <a href='http://www.colorich.se/' target='_blank' rel='noreferrer'>
              <Image
                src='/colorich.webp'
                height={300}
                width={300}
                alt='colorich holding logo'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
