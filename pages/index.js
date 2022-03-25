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
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='author' content='HOP Technologies AB' />
        <link rel='icon' href='/favicon.ico' />
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
