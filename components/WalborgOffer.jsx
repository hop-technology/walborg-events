import Image from 'next/image'

const WalborgOffer = () => {
  return (
    <>
      <div className='walborg_offer'>
        <div className='walborg_offer__container'>
          <div className='walborg_offer__image'>
            <Image
              src='/pinkguy.png'
              alt='Walborg event'
              height={600}
              width={600}
            />
          </div>
          <div className='walborg_offer__text_container'>
            <div className='walborg_offer__text'>
              <p>
                Walborg kan skräddarsy ditt evenemang efter dina önskemål. Vi
                levererar förtärning, teknik, ljud, ljus, scen och möblering för
                upp till 200 personer.
              </p>
              <br></br>
              <p>
                Magasinsgatan 1 har en unik karaktär med fantastisk ljus.
                Lokalen har en skön orangeri-känsla med glastaket som släpper in
                dagsljuset och ger en härlig rymd. Priset för lokalen startar på
                4000 sek.
              </p>
            </div>
          </div>
        </div>
        {/*    <div className='walborg_offer__tree'>
          <Image
            src='/white-tree.svg'
            alt='Walborg event'
            height={1030}
            width={1019}
          />
        </div> */}
      </div>
    </>
  )
}

export default WalborgOffer
