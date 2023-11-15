import React from 'react'
import Layout from './Layout'
import Header from './Header'

export default function InnerLayout(props) {
  return (
    <Layout>
        <div className='row col-12 h-per-100 d-flex-column'>
            <Header />
            {props.children}
        </div>
    </Layout>
  )
}
