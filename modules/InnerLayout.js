import React from 'react'
import Layout from './Layout'
import Header from './Header'

export default function InnerLayout(props) {
  return (
    <Layout>
        <div className='row col-12 '>
            <Header />
            {props.children}
        </div>
    </Layout>
  )
}
