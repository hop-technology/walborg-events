import Head from 'next/head'

import HeroSection from '../components/HeroSection'
import Venue from '../components/VenueInfo'
import ContactInfo from '../components/ContactInfo'
import Collage from '../components/Collage'
import WalborgOffer from '../components/WalborgOffer'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Walborg Events</title>
        <meta name='title' content='Walborg Events' />
        <meta
          name='description'
          content='Välkommen till en magisk oas i centrala Göteborg! Här arrangerar vi allt från utbildningar, konferenser till stora fester. '
        />
        <meta
          name='keywords'
          content='Gothenburg, event, conference, party, parties, training, meetings, walborg, Göteborg, event, konferens, fest, fester, träning, möten, Walborg '
        />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='author' content='HOP Technologies AB' />
        {/* Open Graph / Facebook  */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://walborgevent.com/' />
        <meta property='og:title' content='Walborg Events' />
        <meta
          property='og:description'
          content='Välkommen till en magisk oas i centrala Göteborg! Här arrangerar vi allt från utbildningar, konferenser till stora fester. '
        />
        <meta property='og:image' content='/walborg-events-logo-black.png' />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://walborgevent.com/' />
        <meta property='twitter:title' content='Walborg Events' />
        <meta
          property='twitter:description'
          content='Välkommen till en magisk oas i centrala Göteborg! Här arrangerar vi allt från utbildningar, konferenser till stora fester. '
        />
        <meta property='twitter:image' content='/walborg-events-logo-black.png' />
        <link rel='icon' href='/faviconB.ico'  />
      </Head>
      <div className='wrapper'>
        <HeroSection />
        <Venue />
        <WalborgOffer />
        <ContactInfo />
        <Collage />
        <ContactUs />
        <Footer />
      </div>
    </div>
  )
}

export default Index
