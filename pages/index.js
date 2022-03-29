import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import Venue from '../components/VenueInfo'
import ContactInfo from '../components/ContactInfo'
import Collage from '../components/Collage'
import WalborgOffer from '../components/WalborgOffer'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

const Index = () => {
  return (
    <div>
      <SEO
        url='https://walborgevent.com'
        openGraphType='website'
        schemaType='BusinessEvent'
        title='Walborg Events'
        description='Välkommen till en magisk oas i centrala Göteborg! Här arrangerar vi allt från utbildningar, konferenser till stora fester.'
        image='https://walborgevent.com/walborg-event-thumbnail.png'
      />
      <Head>
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='icon' type='image/png' href='/favicon.png' />
        <link rel="apple-touch-icon" href="/walborg-event-thumbnail.png" />
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
