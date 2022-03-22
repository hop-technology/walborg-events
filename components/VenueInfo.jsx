import Link from "next/link";
import { VenueTree } from "./svgs/VenueTree";

const Venue = () => {
  return (
    <>
      <div className='venue'>
        <div className='venue__info__title'>
          <h1 data-cy='venue-title'>Magasinsgatan 1</h1>
        </div>
        <div className='venue__info__description'>
          <p data-cy='venue-info'>
            Välkommen till en magisk oas i centrala Göteborg! Här arrangerar vi
            allt från utbildningar, konferenser till stora fester. Magasinsgatan
            1 rymmer upp till 200 personer och är den perfekta platsen för att
            skapa oförglömliga möten och stärka relationer.
          </p>
        </div>
        <div>
          <Link href='#contact' scroll>
            <button className='btn__submit'>
              <div className='btn__submit--border'>
                <p className='btn__submit--text'>Boka nu</p>
              </div>
            </button>
          </Link>
        </div>
        <div className='venue__tree'>
          <VenueTree />
        </div>
      </div>
        <div className="venue__coverbox">
        </div>
    </>
  );
};

export default Venue;
