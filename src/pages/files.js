import React from 'react'
import Layout from '../../modules/Layout'
import InnerLayout from '../../modules/InnerLayout'
import Tabs from '../../modules/Tabs'

export default function Files() {
  return (
    <InnerLayout>
      <Tabs />

      <div className='container mt-50'>
        <div className='row d-align-center d-justify-space-between'>
          <div className='row d-d-align-center'>
            Breadcrumbs
          </div>
        </div>
        <div className='col-12 file-grid mt-5'>
          <textarea rows="28" />
          <textarea />
        </div>
      </div>
    </InnerLayout>
  )
}
