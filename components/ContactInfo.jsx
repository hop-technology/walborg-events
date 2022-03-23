import Link from 'next/link';
import Image from 'next/image';


const ContactInfo = () => {
  return (
    <>
    <div className='contact_info'>
      <div className='contact_info__container'>
        <div className='contact_info__text'>
          <p>
            För priser och tillgänglighet vänligen kontakta oss nedan eller{' '}
            <br></br>skriv direkt till: <a href='mailto: event@walborgventures.com'>event@walborgventures.com</a>
          </p>
        </div>
        <div className='contact_info__btn'>
          <Link href='#contact' passHref scroll>
            <button className='btn__submit'>
              <div className='btn__submit--border'>
                <p className='btn__submit--text'>Boka nu</p>
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div className='contact_info__image'>
        <Image src='/madhatters.png' alt='Walborg event' height={300} width={300} />
      </div>
      <div className='contact_info__tree'>
        <Image src='/white-tree.svg' alt='Walborg event' height={1030} width={1019} />
      </div>
    </div>
    </>
  );
};

export default ContactInfo;
