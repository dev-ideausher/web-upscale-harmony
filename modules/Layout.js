import React from 'react'
import Footer from './Footer'

export default function Layout(props) {
  return (
    <div className='upscale-container'>
        {props.children}
        <Footer/>
    </div>
  )
}
