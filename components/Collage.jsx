import Image from 'next/image'

const Collage = () => {
  return (
    <div className='collage'>
      <div className='collage--big'>
        <Image
          src='/collage3840.jpg'
          width='3840'
          height='1592'
          alt='Collage from Alice in startup land event'
        />
      </div>
      <div className='collage--normal'>
        <Image
          src='/collage1920.jpg'
          width='1920'
          height='796'
          alt='Collage from Alice in startup land event'
        />
      </div>
      <div className='collage--small'>
        <Image
          src='/collage600.jpg'
          width='600'
          height='396'
          alt='Collage from Alice in startup land event'
        />
      </div>
    </div>
  )
}

export default Collage
