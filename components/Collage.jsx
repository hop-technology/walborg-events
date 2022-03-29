import Image from 'next/image'

const Collage = () => {
  return (
    <div className='collage'>
      <div className='collage--big'>
        <Image
          src='/collage-walborg-3840.webp'
          width={3840}
          height={1592}
          alt='Collage from Alice in startup land event'
        />
      </div>
      <div className='collage--normal'>
        <Image
          src='/collage-walborg-1920.webp'
          width={1920}
          height={796}
          alt='Collage from Alice in startup land event'
        />
      </div>
      <div className='collage--small'>
        <Image
          src='/collage-walborg-640.webp'
          width={600}
          height={396}
          alt='Collage from Alice in startup land event'
        />
      </div>
    </div>
  )
}

export default Collage
