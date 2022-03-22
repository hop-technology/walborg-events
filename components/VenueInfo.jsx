import Link from 'next/link'
import Image from 'next/image'
// import { VenueTree } from './svgs/VenueTree'

const Venue = () => {
  return (
    <>
      <div className='venue'>
        <div className='venue__info'>
          <div className='venue__info--title'>
            <h1 data-cy='venue-title'>Magasinsgatan 1</h1>
          </div>
          <div className='venue__info--description'>
            <p data-cy='venue-info'>
              Välkommen till en magisk oas i centrala Göteborg! Här arrangerar
              vi allt från utbildningar, konferenser till stora fester.
              Magasinsgatan 1 rymmer upp till 200 personer och är den perfekta
              platsen för att skapa oförglömliga möten och stärka relationer.
            </p>
          </div>
        </div>
        <div>
          <Link href='#contact' scroll passHref>
            <button className='btn__submit'>
              <div className='btn__submit--border'>
                <p className='btn__submit--text'>Boka nu</p>
              </div>
            </button>
          </Link>
        </div>
        <div className='venue__tree'>
        <Image
            src='/white-tree.svg'
            width='1030px'
            height='1019px'
            alt='Walborg event'
          />
          {/* <VenueTree /> */}
        </div>
      </div>
      {/* <div className='venue__coverbox'></div> */}
    </>
  )
}

export default Venue
