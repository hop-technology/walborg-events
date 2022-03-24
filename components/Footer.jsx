import Image from 'next/image'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__contact'>
        <p>Telefon: 073-600 44 68</p>
        <a href='mailto: event@walborgventures.com'>Email: Event@WalborgVentures.com</a>
      </div>
      <div className='footer__shape'>
        <div className='footer__shape--desktop'>
          <Image
            src='/desk-footer.svg'
            width='3840px'
            height='1350px'
            alt='footer'
          />
        </div>
        <div className='footer__shape--mobile'>
          <Image
            src='/mob-footer.svg'
            width='900px'
            height='1460px'
            alt='footer'
          />
        </div>
        <div className='footer__shape--walborg'>
          <Image
            src='/walborg-event.svg'
            height='700px'
            width='700px'
            alt='walborg event logo'
          />
        </div>
        <p className='footer__shape--text'>
          walborg kan existera tack vare partnerskap med
        </p>
        <div className='footer__partners'>
          <div className='footer__partners--logo'>
            {' '}
            <Image
              src='/hop-logo.svg'
              height='300px'
              width='300px'
              alt='hop technology logo'
            />
          </div>
          <div className='footer__partners--logo'>
            {' '}
            <Image
              src='/wallenstam-logo.svg'
              height='300px'
              width='300px'
              alt='wallenstam logo'
            />
          </div>
          <div className='footer__partners--logo'>
            {' '}
            <Image
              src='/colorich-logo.svg'
              height='300px'
              width='300px'
              alt='colorich holding logo'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
