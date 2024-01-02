import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='col-12 row d-align-center d-justify-space-between pt-5 pb-5 border-top mt-5 container'>
      <div className='row d-align-end'>
        <Image src="/images/upscale_logo.svg" width={66} height={32} alt="logo"></Image>
        <span className='font-13 l-100 ml-2 f-400'>© 2023</span>
      </div>
      <div className='row d-align-center'>
          <h5 className='mr-3 f-400'>Designed & Developed by</h5>
          <Image src="/images/IU-logo.png" width={71} height={29} alt="logo"></Image>
      </div>
    </div>
  )
}
