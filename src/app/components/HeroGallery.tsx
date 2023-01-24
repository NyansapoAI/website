import Image from 'next/image'
import React from 'react'
import image1 from '@imgs/hero/0.png'
type Props = {}

function HeroGallery({}: Props) {
  return (
    <div className='relative '>
      <div className='h-64 w-64 absolute left-10 bottom-0 rounded-full z-0 bg-cyan-600'></div>
      <div className='h-80 w-80 absolute top-0 right-10 rounded-full bg-cyan-200 z-0'></div>
      <div className='z-50 hover:scale-125 duration-300 relative'>
        <Image
          src={image1.src}
          width={800}
          height={800}
          alt='children doing activities'
        />
      </div>
      {/* <div className='z-20 left-48 -top-10 absolute'>
        <Image
          src={image1.src}
          width={200}
          height={200}
          alt='children doing activities'
        />
      </div>
      <div className='z-10 absolute -right-20 top-20'>
        <Image
          src={image1.src}
          width={250}
          height={250}
          alt='children doing activities'
        />
      </div>
      <div className='z-40 -bottom-20 left-20 absolute'>
        <Image
          src={image1.src}
          width={320}
          height={320}
          alt='children doing activities'
        />
      </div>
      <div className='z-10 -bottom-40 left-80 absolute'>
        <Image
          src={image1.src}
          width={300}
          height={300}
          alt='children doing activities'
        />
      </div>
      <div className='z-10 -bottom-48  right-96 absolute'>
        <Image
          src={image1.src}
          width={300}
          height={300}
          alt='children doing activities'
        />
      </div> */}
    </div>
  )
}

export default HeroGallery
