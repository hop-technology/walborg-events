import Link from 'next/link';
import Image from 'next/image';
import { VenueTree } from './svgs/VenueTree';

const ContactInfo = () => {
  return (
    <div className='contact__info'>
      <div className='contact__info__container'>
        <div className='contact__info__text'>
          <p>
            För priser och tillgänglighet vänligen kontakta oss nedan eller{' '}
            <br></br>skriv direkt till: <a href='mailto: event@walborgventures.com'>event@walborgventures.com</a>
          </p>
        </div>
        <div className='contact__info__btn'>
          <Link href='#contact' scroll>
            <button className='btn__submit'>
              <div className='btn__submit--border'>
                <p className='btn__submit--text'>Boka nu</p>
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div className='contact__info__image'>
        <Image src='/madhatters.png' alt='contact' height={300} width={300} />
      </div>
      <div className='contact__info__tree'>
        <VenueTree />
      </div>
    </div>
  );
};

export default ContactInfo;
